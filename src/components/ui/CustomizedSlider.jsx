import React from "react";
("use client");
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/Slider";

const MIN = 0;
const MAX = 50000;
const STEP = 100;

function fmt(v) {
  return "$" + v.toLocaleString();
}
const CustomizedSlider = ({ label, control, minVal, maxVal, setValue }) => {
  return (
    <div className="grid w-full">
      <div className="flex items-center justify-between mb-2">
        {label ? <Label>{label}</Label> : null}
      </div>
      <div className="space-y-2">
        <Controller
          name="minSalary"
          control={control}
          render={() => (
            <Slider
              value={[Number(minVal), Number(maxVal)]}
              onValueChange={([newMin, newMax]) => {
                setValue("compensationMin", newMin, { shouldValidate: true });
                setValue("compensationMax", newMax, { shouldValidate: true });
              }}
              min={MIN}
              max={MAX}
              step={STEP}
              className="w-full"
            />
          )}
        />
        <div className="flex justify-between">
          <span className="text-sm font-medium text-primary">
            {fmt(Number(minVal))}
          </span>
          <span className="text-sm font-medium text-primary">
            {fmt(Number(maxVal))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomizedSlider;
