// src/pages/SignupPage.jsx
import React, { useState } from "react";
import axios from "axios";
import SignupForm from "../Components/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
