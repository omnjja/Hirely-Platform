import React, { useState } from "react";
"use client"
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const CustomizedSlider = ({
  label,
  lowerBound = 500,
  upperBound = 10000,
  disabled,
}) => {
  const [value, setValue] = useState([2000, 5000]);

  return (
    <div className="grid w-full">
      <div className="flex items-center justify-between mb-2">
        {label ? (
          <Label>{label}</Label>
        ) : null}
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={setValue}
        min={lowerBound}
        max={upperBound}
        step={100}
        disabled={disabled}
      />
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">${lowerBound}</span>
        <span className="text-sm text-muted-foreground">${upperBound}+</span>
      </div>
    </div>
  );
};

export default CustomizedSlider;
