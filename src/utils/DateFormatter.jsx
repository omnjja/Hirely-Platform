export const formatDateForDisplay = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

export const formatDateForInput = (date) => {
  if (!date) return "";
  return date.split("T")[0];
};
