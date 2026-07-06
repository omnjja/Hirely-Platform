export const formatDateForDisplay = (date, ifDayNeeded) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: ifDayNeeded ? "numeric" : undefined,
  });
};

export const formatDateForInput = (date) => {
  if (!date) return "";
  return date.split("T")[0];
};

export const formatDuration = (milliseconds) => {
  const totalSeconds = milliseconds / 1000;

  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.floor(totalSeconds % 60);

  return `${mins}m ${secs}s`;
};
