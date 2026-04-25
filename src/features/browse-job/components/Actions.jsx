import React from "react";
import { Sparkles, Heart } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";

const Actions = () => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      <ButtonComponent className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-700">
        <Heart size={16} />
      </ButtonComponent>
      <ButtonComponent className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-700">
        <p className="flex gap-1 items-center text-[11px] sm:text-sm">
          <Sparkles size={14} />
          ASK AI
        </p>
      </ButtonComponent>
      <ButtonComponent
        text="APPLY WITH AUTOFILL"
        type="button"
        className="text-[11px] sm:text-sm"
      />
    </div>
  );
};

export default Actions;
