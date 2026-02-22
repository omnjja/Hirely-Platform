import React from "react";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import RecoveryEmail from "./pages/RecoveryEmail";
import SucessfulPassword from "./pages/SucessfulPassword";

function App() {
  return (
    <BrowserRouter>
      {/* <h1 className="font-bold text-accent text-4xl">Main Title</h1>
      <h2 className="font-bold text-primary text-3xl">Section Title</h2>
      <h3 className="font-medium text-text text-2xl">Subheading</h3>
      <p className="font-regular text-text text-primary">
        This is body text using Montserrat regular.
      </p>
      <button className="bg-primary text-secondary font-medium py-2 px-4 rounded hover:border-accent border">
        Click Me
      </button>
      <span className="text-ai font-medium">AI Highlight</span> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/RecoveryEmail" element={<RecoveryEmail />} />
        <Route path="/SuccessfulPassword" element={<SucessfulPassword />} />
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center h-screen gap-4">
              <Link to="/login" className="text-primary">
                Go to Login
              </Link>
              <Link to="/signup" className="text-primary">
                Go to Sign Up
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
