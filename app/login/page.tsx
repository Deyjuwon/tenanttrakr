"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F7F9] flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] bg-white rounded-xl p-8 shadow-sm">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="TenantTrakr" className="w-[140px]" />
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[22px] font-semibold text-gray-900">
            Welcome back
          </h1>
          <p className="text-[14px] text-gray-500 mt-1">
            Login to manage your properties
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="text-[13px] text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full text-[13px] mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-[13px] text-gray-600">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full text-[13px] px-4 py-2 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-[13px] right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 bg-teal-600 text-white py-2 rounded-md font-medium hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[13px] text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-teal-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
