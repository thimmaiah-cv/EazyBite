import React, { useState } from "react";
import Logo from "../../assets/img/LogoInnerShadow.svg";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MailIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      // onAuthStateChanged will update user — navigate to dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      // Basic friendly error messages:
      const msg =
        err.code === "auth/user-not-found"
          ? "No user found with this email."
          : err.code === "auth/wrong-password"
          ? "Incorrect password."
          : err.code === "auth/invalid-email"
          ? "Invalid email address."
          : err.code === "auth/invalid-credential"
          ? "Invalid credentials."
          : "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F9F8] min-h-screen flex w-screen flex-row justify-center">
      <div className="min-w-[60%] w-screen pl-[5%] pt-[2.5%] bg-login-scr bg-cover">
        <img src={`${Logo}`} className="h-11 w-auto" alt="EazyBite Logo" />
        <div className="text-white flex flex-col mt-12">
          <span className="leading-none text-[80px] font-raleway font-extrabold shadow-inner">
            Manage your
            <br />
            restaurant with
            <br />
            <span className="text-[#F49325] m-0 p-0">ease</span>
          </span>
        </div>

        <p className="mt-5 text-white text-xl font-raleway font-medium">
          Streamline orders, manage menus, and delight
          <br /> customers with our intuitive QR-based ordering <br />
          system.
        </p>

        <div className="flex gap-20 mt-12">
          <span className="text-[#51BDA8] font-roboto font-extrabold text-4xl leading-6">
            500+ <br />
            <span className="text-white font-raleway font-medium text-base">
              Restaurants
            </span>
          </span>

          <span className="text-[#51BDA8] font-roboto font-extrabold text-4xl leading-6">
            2M+ <br />
            <span className="text-white font-raleway font-medium text-base">
              Orders Served
            </span>
          </span>

          <span className="text-[#F49325] font-roboto font-extrabold text-4xl leading-6">
            98% <br />
            <span className="text-white font-raleway font-medium text-base">
              Satisfaction
            </span>
          </span>
        </div>

        <span className="block text-white mt-20 font-raleway font-normal text-sm">
          Trusted by restaurants worldwide
        </span>
      </div>

      <div className="bg-[#F5F9F8] min-w-[40%] w-screen px-[5%] flex flex-col justify-center align-middle">
        <div className="">
          <h1 className="text-[#223239] font-raleway font-extrabold text-3xl">
            Admin Panel
          </h1>
          <span className="block font-medium text-lg font-raleway text-[#647B87] ">
            Sign in to manage your restaurant
          </span>

          {error && (
            <div className="mt-10 text-sm text-red-600 font-raleway font-semibold bg-red-600/10 border border-red-400 px-3 py-2 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
            <div className="">
              <label className="text-[#223239] text-base font-raleway font-semibold">
                Email Address
              </label>
              <div className="relative mt-[2px]">
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#A1A8AC]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-[5px] font-roboto font-normal text-[#223239] border-2 border-[#D0D0D0] placeholder-[#738892] focus:outline-[#223239] outline-2"
                  placeholder="admin@example.com"
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-[#223239] text-base font-raleway font-semibold">
                Password
              </label>
              <div className="relative mt-[2px]">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#A1A8AC]" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-[5px] font-roboto font-black text-[#223239] border-2 border-[#D0D0D0] placeholder-[#738892] focus:outline-[#223239] outline-2"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <span className="text-[#51BDA8] text-sm text-end mt-2.5 cursor-pointer font-raleway font-semibold">
              Forgot Password?
            </span>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 mt-5 text-white font-raleway font-semibold text-base rounded-[5px] bg-[#1F2932] hover:bg-[#16242f] disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in to Dashboard"}
            </button>
          </form>

          {/*  */}
        </div>
      </div>

      {/*  */}
    </div>
  );
}
