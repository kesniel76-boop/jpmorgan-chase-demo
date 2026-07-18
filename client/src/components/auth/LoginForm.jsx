import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { login } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
  
  const navigate = useNavigate();

  const { login: saveUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const result = await login(email, password);

    setLoading(false);

    if (result.success) {
      saveUser(result.user);
      navigate("/dashboard");
    } 
    
    else {
      setError(result.message);
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

      <h2 className="text-3xl font-bold text-white">
        Welcome Back
      </h2>

      <p className="text-gray-400 mt-2">
        Sign in to your JPMorgan Chase account.
      </p>

      <form
        onSubmit={handleLogin}
        className="mt-8 space-y-6"
      >

        <div>
          <label className="text-gray-300 text-sm">
            Email Address
          </label>

          <div className="mt-2 flex items-center bg-slate-800 rounded-lg px-4">

            <FaEnvelope className="text-gray-500" />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none p-4 text-white"
            />

          </div>
        </div>

        <div>

          <label className="text-gray-300 text-sm">
            Password
          </label>

          <div className="mt-2 flex items-center bg-slate-800 rounded-lg px-4">

            <FaLock className="text-gray-500" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none p-4 text-white"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400" />
              ) : (
                <FaEye className="text-gray-400" />
              )}
            </button>

          </div>

        </div>

        <div className="flex justify-between text-sm">

          <label className="flex items-center gap-2 text-gray-300">

            <input type="checkbox" />

            Remember me

          </label>

          <button
            type="button"
            className="text-green-400 hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        {error && (
          <div className="rounded-lg bg-red-500/10 border border-red-500 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl font-semibold transition disabled:opacity-60"
        >
          {loading ? "Signing You In..." : "Login"}
        </button>

      </form>

      <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800 p-4">
        <div className="mt-4">
          <Link
            to="/signup"
            className="text-green-400 hover:underline"
          >
            Don't have an account? Create one
          </Link>
        </div>

      </div>

    </div>
  );
}

export default LoginForm;