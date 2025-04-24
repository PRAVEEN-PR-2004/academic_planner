import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ name: "", password: "" });
  const navigate = useNavigate(); // hook to navigate programmatically

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${form.name}`);
  };

  const handleSignupClick = () => {
    navigate("/signup"); // navigate to /signup route
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-yellow-100 to-yellow-200">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl bg-opacity-90 backdrop-blur-md rounded-2xl sm:p-10">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-primary">
          Student Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition rounded-lg bg-primary"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={handleSignupClick}
            className="font-medium cursor-pointer text-primary hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
