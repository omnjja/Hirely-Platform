
const useFormatText = (str) => {
  return str
    .replace("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export default useFormatText;
