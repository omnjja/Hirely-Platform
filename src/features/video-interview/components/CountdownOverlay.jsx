import React, { memo, useEffect, useRef, useState } from "react";

const CountdownOverlay = ({interviewId, phase, preparationTime, onCountdownFinished }) => {
  const [countdown, setCountdown] = useState(preparationTime);
  const startedRef = useRef(false);

  // Reset countdown whenever we enter PREPARING
  useEffect(() => {
    if (phase !== "preparing") return;
    startedRef.current = false;
    setCountdown(preparationTime);
  }, [phase, preparationTime]);

  useEffect(() => {
    if (phase !== "preparing") return;

    if (countdown === 0) {
      if (!startedRef.current) {
        startedRef.current = true;
        onCountdownFinished();
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, phase, onCountdownFinished]);

  if (phase !== "preparing") return null;

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
      <p className="mb-2 text-sm font-medium text-white">Recording starts in</p>
      <span className="text-7xl font-bold text-white">{countdown}</span>
    </div>
  );
};

export default memo(CountdownOverlay);
