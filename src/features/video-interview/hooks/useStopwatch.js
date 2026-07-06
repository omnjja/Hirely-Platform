import { useEffect, useState } from "react";

export function useStopwatch(active) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (!active) return;

    const startedAt = Date.now() - elapsedSeconds * 1000;

    const id = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startedAt) / 1000));
    }, 250);

    return () => clearInterval(id);
  }, [active]);

  const reset = () => setElapsedSeconds(0);

  return {
    elapsedSeconds,
    reset,
  };
}
