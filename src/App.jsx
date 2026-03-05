import React from "react";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
      <Routes>
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
              <Link to="/role-selection" className="text-primary">
                Go to Role Selection
              </Link>
            </div>
          }
        />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
