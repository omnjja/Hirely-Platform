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
