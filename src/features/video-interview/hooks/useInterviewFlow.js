import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { useCameraStream } from "./useCameraStream";
import { useMediaRecorder } from "./useMediaRecorder";
import { useCountdown } from "./useCountdown";
import { useStopwatch } from "./useStopwatch";
import {
  createInitialState,
  interviewReducer,
} from "../reducers/interviewReducer";
import { PHASES } from "@/constants/videoInterview";
import { uploadFile } from "@/lib/uploadFile";

export function useInterviewFlow({
  currentStep,
  questions,
  interviewId,
  createVideoURL,
  submitAnswer,
}) {
  const [state, dispatch] = useReducer(
    interviewReducer,
    {
      totalQuestions: questions?.length,
      currentStep: currentStep || 0,
    },
    createInitialState,
  );
  const { step, phase, submitError } = state;
  const [isPending, setIsPending] = useState(false);

  // resolve the active question from `step`, not a flat prop
  const currentQuestion = useMemo(
    () => questions?.find((q) => q.order === step) ?? questions?.[0],
    [questions, step],
  );

  const preparationTime = currentQuestion?.preparationDuration;
  const totalDuration = currentQuestion?.answerDuration;

  // camera setup
  const { stream: previewStream, error: cameraError } = useCameraStream();

  // recorder setup
  const recorder = useMediaRecorder(previewStream);

  // timers
  const countdown = useCountdown(preparationTime, phase === PHASES.PREPARING);
  const stopwatch = useStopwatch(phase === PHASES.RECORDING);

  // skip countdown
  const skipCountdown = useCallback(() => {
    countdown.setRemaining(0);
    dispatch({ type: "PREP_FINISHED" });
  }, [countdown]);

  // video actions
  const stopRecording = useCallback(() => {
    recorder.stop();
    dispatch({ type: "STOP_RECORDING" });
  }, [recorder]);

  const submit = useCallback(async () => {
    if (phase !== PHASES.REVIEW) return;
    if (!recorder.clip || !currentQuestion) {
      throw new Error("No recording to submit");
    }
    if (currentQuestion.type === "practice") {
      dispatch({ type: "SUBMIT_START" });
      dispatch({ type: "SUBMIT_ANSWER" });
      return;
    }
    dispatch({ type: "SUBMIT_START" });
    try {
      const blob = recorder.clip.blob;

      const { uploadUrl, key } = await createVideoURL({
        interviewId,
        questionId: currentQuestion.id,
        requestBody: {
          fileName: `answer-${currentQuestion?.order}.webm`,
          contentType: blob.type,
        },
      });

      setIsPending(true);
      try {
        await uploadFile({
          uploadUrl,
          file: blob,
        });

        await submitAnswer({
          interviewId,
          requestBody: {
            questionId: currentQuestion.id,
            videoKey: key,
            responseDuration: stopwatch.elapsedSeconds,
          },
        });
      } finally {
        setIsPending(false);
      }
      dispatch({ type: "SUBMIT_ANSWER", videoKey: key });
    } catch (err) {
      dispatch({ type: "SUBMIT_ERROR", error: err.message });
      throw err;
    }
  }, [
    recorder.clip,
    currentQuestion,
    interviewId,
    createVideoURL,
    submitAnswer,
    phase,
    stopwatch,
  ]);

  // interview flow

  // 1. countdown 0 -> start recording
  useEffect(() => {
    if (phase === PHASES.PREPARING && countdown === 0) {
      dispatch({ type: "PREP_FINISHED" });
    }
  }, [phase, countdown]);

  // 2. start recording
  useEffect(() => {
    if (phase === PHASES.RECORDING) {
      recorder.start();
    }
  }, [phase]);

  // 3. new question
  useEffect(() => {
    if (phase === PHASES.PREPARING) {
      recorder.reset();
      stopwatch.reset();
    }
  }, [phase, step]);

  // stop automatically when recording reaches THIS question's max duration
  useEffect(() => {
    if (
      phase === PHASES.RECORDING &&
      stopwatch.elapsedSeconds >= totalDuration
    ) {
      stopRecording();
    }
  }, [phase, stopwatch.elapsedSeconds, stopRecording, totalDuration]);

  // current status "used in interview recorder"
  const status = useMemo(() => {
    if (recorder.clip) return "stopped";
    if (phase === PHASES.RECORDING) return "recording";
    return "idle";
  }, [phase, recorder.clip]);

  return {
    interview: {
      step,
      phase,
      currentQuestion,
      isPending,
      submitError,
    },

    media: {
      previewStream,
      mediaBlob: recorder.clip?.blob,
      mediaBlobUrl: recorder.clip?.url,
      status,
      cameraError,
    },

    timers: {
      countdown: countdown.remaining,
      recordingElapsed: stopwatch.elapsedSeconds,
    },

    actions: {
      stopRecording,
      submit,
      skipCountdown,
    },
  };
}
