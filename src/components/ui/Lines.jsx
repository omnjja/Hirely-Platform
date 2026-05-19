import React from "react";
import lines from "@/assets/lines.webp";

const POSITION_CLASSES = {
  none: "",
  lowerLeft: "-scale-x-100",
  upperRight: "-scale-y-100",
  "rotate-90": "-rotate-90",
  "rotate-270": "-rotate-270",
};
const PLACES_CLASSES = {
  lowerLeft: "bottom-0 left-0",
  upperRight: "top-0 right-0",
  lowerRight: "bottom-0 right-0",
  upperLeft: "top-0 left-0",
};
const Lines = ({ place, position }) => {
  return (
    <div
      className={`absolute ${PLACES_CLASSES[place] || ""} w-100 h-100 pointer-events-none hidden lg:block`}
    >
      <img
        src={lines}
        alt="lines"
        className={`w-full h-full ${POSITION_CLASSES[position] || position || ""}`}
      />
    </div>
  );
};

export default Lines;
