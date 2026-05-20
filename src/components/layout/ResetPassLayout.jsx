import React from "react";
import ButtonComponent from "../ui/ButtonComponent";
import Logo from "../ui/Logo";
import FormHeader from "@/features/auth/components/FormHeader";
import { useNavigate } from "react-router-dom";
import Lines from "../ui/Lines";

const ResetPassLayout = ({
  buttonText,
  header,
  subhead,
  children,
  to,
  leftLines,
  topLines,
  lowerImage,
  action,
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen bg-white">
      {topLines && <Lines position="upperRight" place="upperRight" />}
      {leftLines && <Lines position="lowerLeft" place="lowerLeft" />}
      <div className="px-6 pt-6">
        <Logo />
      </div>

      <div className="w-full md:w-[55%] mx-auto px-4 md:px-6 pt-10">
        <div className="max-w-md w-full mx-auto">
          <FormHeader head={header} subhead={subhead} />

          <div className="flex flex-col">
            {children}

            <ButtonComponent
              text={buttonText}
              fullWidth
              onClick={() => to ? navigate(to) : action()}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 hidden lg:block">
        {lowerImage}
      </div>
    </div>
  );
};

export default ResetPassLayout;
