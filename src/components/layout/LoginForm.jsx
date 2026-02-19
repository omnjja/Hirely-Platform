import React, { useState } from "react";
import FormHeader from "../ui/FormHeader";
import InputField from "../ui/InputField";
import PasswordField from "../ui/PasswordField";
import ButtonComponent from "../ui/ButtonComponent";
import FormFooter from "../ui/FormFooter";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password } = formData;

    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    // If there are no errors continue with form submission logic
  };
  return (
    <div className="w-[55%] mx-auto bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <FormHeader
          head="Sign in"
          subhead="Please Login to continue to your account"
        />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <PasswordField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <ButtonComponent text="Sign in" type="submit" fullWidth />

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

          {/* Need an account */}
          <FormFooter
            text="Need an account? "
            linkText="Create one"
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
