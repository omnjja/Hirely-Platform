import React from "react";
import ButtonComponent from "../ui/ButtonComponent";
import Logo from "../ui/Logo";
import FormHeader from "../ui/FormHeader";

const ResetPassLayout = ({ buttonText, header, subhead, children, width }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className="
          w-full
          md:w-[50%]
          bg-white
          rounded-2xl
          pb-10
          px-5
          md:min-h-130
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <div className="hidden md:block">
          <Logo />
        </div>

        <div
          style={{ width: width ? `${width}%` : "50%" }}
          className="w-full
            mx-auto
            mt-7
            flex
            flex-col
            items-start
            gap-1
          "
        >
          <FormHeader head={header} subhead={subhead} />
          <div className="w-full">{children}</div>
          <ButtonComponent text={buttonText} fullWidth />
        </div>
      </div>
    </div>
  );
};

export default ResetPassLayout;
