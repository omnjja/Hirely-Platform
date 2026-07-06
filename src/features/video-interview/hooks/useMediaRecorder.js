import { useCallback, useRef, useState } from "react";

const PREFERRED_MIME_TYPES = [
  "video/webm;codecs=vp9,opus",
  "video/webm;codecs=vp8,opus",
  "video/webm",
];

function pickSupportedMimeType() {
  if (typeof MediaRecorder === "undefined") return "video/webm";
  return (
    PREFERRED_MIME_TYPES.find((t) => MediaRecorder.isTypeSupported(t)) ||
    "video/webm"
  );
}

export function useMediaRecorder(stream) {
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [clip, setClip] = useState(null); // { blob, url } | null

  const start = useCallback(() => {
    if (!stream) return;
    chunksRef.current = [];
    const mimeType = pickSupportedMimeType();
    const recorder = new MediaRecorder(stream, { mimeType });

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunksRef.current.push(event.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: mimeType });
      const url = URL.createObjectURL(blob);
      setClip({ blob, url });
    };

    recorder.start();
    recorderRef.current = recorder;
  }, [stream]);

  const stop = useCallback(() => {
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
  }, []);

  const reset = useCallback(() => {
    setClip((prev) => {
      if (prev?.url) URL.revokeObjectURL(prev.url);
      return null;
    });
  }, []);

  return { start, stop, reset, clip };
}
