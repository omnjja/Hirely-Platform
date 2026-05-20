import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const formatPastDate = (date) => {
  if (!date) return "";
  return dayjs(date).fromNow();
};
