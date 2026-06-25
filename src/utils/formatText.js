export const formatText = (str) => {
  if (!str) return "";
  return str
    .replace("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};
