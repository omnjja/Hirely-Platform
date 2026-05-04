import React from "react";
import { Sparkles, Heart } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { useIsMobile } from "@/hooks/use-mobile";

const Actions = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full flex h-10 gap-2 sm:gap-3">
      <ButtonComponent className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-700">
        <Heart size={16} />
      </ButtonComponent>
      <ButtonComponent className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-700">
        <p className="flex gap-1 items-center text-[11px] sm:text-sm">
          <Sparkles size={14} />
          {!isMobile && "ASK AI"}
        </p>
      </ButtonComponent>
      <ButtonComponent
        text={isMobile ? "APPLY" : "APPLY WITH AUTOFILL"}
        type="button"
        className="text-[11px] sm:text-sm flex-1"
      />
    </div>
  );
};

export default Actions;
