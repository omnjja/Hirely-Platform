import React from "react";
import ButtonComponent from "../ui/ButtonComponent";
import Logo from "../ui/Logo";
import FormHeader from "../ui/FormHeader";
import { useNavigate } from "react-router-dom";

const ResetPassLayout = ({
  buttonText,
  header,
  subhead,
  children,
  width,
  to,
}) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 pt-6">
        <Logo />
      </div>

      <div className="w-full md:w-[55%] mx-auto px-4 md:px-6 py-10">
        <div className="max-w-md w-full mx-auto">
          <FormHeader head={header} subhead={subhead} />

          <div className="mt-6 flex flex-col gap-4">
            {children}

            <ButtonComponent
              text={buttonText}
              fullWidth
              onClick={() => to && navigate(to)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassLayout;
