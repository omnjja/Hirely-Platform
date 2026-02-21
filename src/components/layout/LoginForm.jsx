import React from "react";
import FormHeader from "../ui/FormHeader";
import InputField from "../ui/InputField";
import PasswordField from "../ui/PasswordField";
import ButtonComponent from "../ui/ButtonComponent";
import FormFooter from "../ui/FormFooter";
import GoogleButton from "../ui/GoogleButton";
import Divider from "../ui/Divider";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const schema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate api call
      console.log(data);
      throw new Error("Failed to sign in");
    } catch (error) {
      setError("root", { message: "Failed to sign in. Please try again." });
    }
  };

  return (
    <div
      className="w-full
    sm:w-[90%]
    md:w-[70%]
    lg:w-[55%]
    xl:w-[45%]
    mx-auto
    bg-white
    flex
    items-center
    justify-center
    px-4
    sm:px-6
    py-8
    rounded-xl
    shadow-sm"
    >
      <div className="max-w-md w-full py-6">
        <FormHeader
          head="Sign in"
          subhead="Please Login to continue to your account"
        />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email"
            name="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <PasswordField
            label="Password"
            name="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ButtonComponent
            text={isSubmitting ? "Signing in..." : "Sign in"}
            type="submit"
            fullWidth
            disabled={isSubmitting}
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 font-bold text-primary accent-primary border-gray-300 rounded focus:ring-primary"
              />
              <span>Keep me logged in</span>
            </label>

            <button
              type="button"
              className="text-red-600 hover:underline"
              onClick={() => {}}
            >
              Forgot password?
            </button>
          </div>

          {/* OR Divider */}
          <Divider label="or" />

          {/* Google Button */}
          <GoogleButton label="Continue with Google" />

          {/* Need an account */}
          <FormFooter
            text="Need an account? "
            linkText="Create one"
            destination="/signup"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
