import { useCallback, useEffect, useMemo, useReducer } from "react";
import { useCameraStream } from "./useCameraStream";
import { useMediaRecorder } from "./useMediaRecorder";
import { useCountdown } from "./useCountdown";
import { useStopwatch } from "./useStopwatch";
import {
  createInitialState,
  interviewReducer,
} from "../reducers/interviewReducer";
import { PHASES } from "@/constants/videoInterview";

export function useInterviewFlow({
  questions,
  preparationTime,
  totalDuration,
  retakes,
}) {
  const [state, dispatch] = useReducer(
    interviewReducer,
    {
      totalQuestions: questions.length,
      retakesAllowed: retakes,
    },
    createInitialState,
  );
  const { step, phase, retakesLeft } = state;

  // camera setup
  const { stream: previewStream, error: cameraError } = useCameraStream();

  // recorder setup
  const recorder = useMediaRecorder(previewStream);

  // timers
  const countdown = useCountdown(preparationTime, phase === PHASES.PREPARING);
  const stopwatch = useStopwatch(phase === PHASES.RECORDING);

  // video actions
  const stopRecording = useCallback(() => {
    recorder.stop();
    dispatch({ type: "STOP_RECORDING" });
  }, [recorder]);

  const retake = useCallback(() => {
    dispatch({ type: "RETAKE" });
  }, []);

  const submit = useCallback(() => {
    dispatch({ type: "SUBMIT_ANSWER" });
  }, []);

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

  // 3. retake or new question
  useEffect(() => {
    if (phase === PHASES.PREPARING) {
      recorder.reset();
      stopwatch.reset();
    }
  }, [phase, step]);

  // stop automatically when recording reach max duration
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

    if (phase === PHASES.RECORDING) {
      return "recording";
    }

    return "idle";
  }, [phase, recorder.clip]);

  return {
    interview: {
      step,
      phase,
      retakesLeft,
    },

    media: {
      previewStream,
      mediaBlobUrl: recorder.clip?.url,
      status,
      cameraError,
    },

    timers: {
      countdown,
      recordingElapsed: stopwatch.elapsedSeconds,
    },

    actions: {
      stopRecording,
      retake,
      submit,
    },
  };
}
