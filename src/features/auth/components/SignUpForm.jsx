import React from "react";
import PasswordField from "../../../components/ui/PasswordField";
import InputField from "../../../components/ui/InputField";
import FormHeader from "./FormHeader";
import ButtonComponent from "../../../components/ui/ButtonComponent";
import FormFooter from "./FormFooter";
import GoogleButton from "../../../components/ui/GoogleButton";
import Divider from "../../../components/ui/Divider";
import DateField from "../../../components/ui/DateField";
import useSignupMutation from "../hooks/useSignupMutation";
import {
  userSignupDefaultValues,
  userSignupSchema,
} from "../../../shcemas/userSignupSchema";
import useCustomForm from "../../../hooks/useCustomForm";
import * as authAPI from "../services/authService";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: userSignupDefaultValues,
    schema: userSignupSchema,
  });

  const { mutateAsync: signup } = useSignupMutation();

  const onSubmit = async (data) => {
    const { confirmPassword, ...payload } = data;
    try {
      await signup(payload);
      reset();
    } catch (error) {
      setError("root", {
        message:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div
      className="
      w-full 
      md:w-[55%] 
      mx-auto 
      bg-white 
      flex 
      justify-center 
      px-4 
      md:px-6
      mb-8 
      md:mb-0
    "
    >
      <div className="max-w-md w-full pb-1">
        <FormHeader head="Sign Up" subhead="Sign up to enjoy the features" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
          <InputField
            {...register("email")}
            label="Email"
            error={errors.email?.message}
          />
          <PasswordField
            {...register("password")}
            label="Password"
            error={errors.password?.message}
          />
          <PasswordField
            {...register("confirmPassword")}
            label="Password Confirmation"
            error={errors.confirmPassword?.message}
          />
          <DateField
            name="dateOfBirth"
            control={control}
            label="Date of Birth"
            error={errors.dateOfBirth?.message}
          />
          {errors.root && (
            <p className="text-red-500 text-sm flex items-center mb-1">
              {errors.root.message || "An error occurred. Please try again."}
            </p>
          )}
          <ButtonComponent
            text={isSubmitting ? "Signing up..." : "Sign up"}
            type="submit"
            fullWidth
            disabled={isSubmitting}
          />
          <Divider label="or" />

          <GoogleButton
            label="Continue with Google"
            onClick={authAPI.googleAuth}
          />

          <FormFooter
            text="Already have an account? "
            linkText="Sign in"
            destination="/login"
          />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
