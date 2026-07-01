import React from "react";
import { TextAlignStart } from "lucide-react";
import InputFieldWithLabel from "../../../components/ui/InputFieldWithLabel";
import ButtonComponent from "../../../components/ui/ButtonComponent";

const RecruiterNotes = () => {
  return (
    <div className="md:mt-3 border border-[#0A0A0A] rounded-xl p-3">
      <div className="flex items-center gap-1">
        <TextAlignStart size={15} />
        <p className="font-semibold text-[#2A3439] text-sm">Recruiter Notes</p>
      </div>
      <InputFieldWithLabel
        fieldHeight="50"
        placeholder="Add private comments..."
      />
      <ButtonComponent style={{ size: "sm", bgColor: "#4C58A6" }}>
        Save Note
      </ButtonComponent>
    </div>
  );
};

export default RecruiterNotes;
