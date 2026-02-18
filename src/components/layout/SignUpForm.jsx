import React from "react";
import PasswordField from "../ui/PasswordField";
import SelectField from "../ui/SelectField";
import InputField from "../ui/InputField";
import FormHeader from "../ui/FormHeader";
import ButtonComponent from "../ui/ButtonComponent";
import FormFooter from "../ui/FormFooter";

const SignupForm = () => {
  return (
    <div className="w-[55%] mx-auto bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <FormHeader head="Sign Up" subhead="Sign up to enjoy the features" />

        <form className="flex flex-col gap-4">
          <InputField label="Name" />
          <InputField label="Email" />
          <PasswordField label="Password" />
          <PasswordField label="Password Confirmation" />
          <SelectField />

          <ButtonComponent text="Sign up" type="button" fullWidth />

          {/* OR Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-sm font-medium">Continue with Google</span>
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-4 h-4"
            />
          </button>

          {/* Already have account */}
          <FormFooter
            text="Already have an account? "
            linkText="Sign in"
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
