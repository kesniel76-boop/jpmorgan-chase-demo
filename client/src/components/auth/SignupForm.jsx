import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

function SignupForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    transactionPin: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePinChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 4) {
      setForm({
        ...form,
        transactionPin: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword ||
      !form.transactionPin
    ) {
      return setError("Please complete all fields.");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (form.transactionPin.length !== 4) {
      return setError(
        "Transaction PIN must be exactly 4 digits."
      );
    }

    setLoading(true);

    try {
      const response = await api.post("/auth/register", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        password: form.password,
        transactionPin: form.transactionPin,
      });

      if (response.data.success) {
        alert("Account created successfully.");

        navigate("/login");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Unable to connect to server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

      <h2 className="text-3xl font-bold text-white">
        Create Your Account
      </h2>

      <p className="text-gray-400 mt-2">
        Join JP Morgan Chase Digital Banking.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid md:grid-cols-2 gap-6"
      >        <div>
          <label className="text-gray-300 text-sm">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="David"
            className="w-full mt-2 bg-slate-800 rounded-lg p-4 text-white"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Samuel"
            className="w-full mt-2 bg-slate-800 rounded-lg p-4 text-white"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full mt-2 bg-slate-800 rounded-lg p-4 text-white"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234..."
            className="w-full mt-2 bg-slate-800 rounded-lg p-4 text-white"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full mt-2 bg-slate-800 rounded-lg p-4 text-white"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full mt-2 bg-slate-800 rounded-lg p-4 text-white"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-gray-300 text-sm">
            4-Digit Transaction PIN
          </label>

          <input
            type="password"
            name="transactionPin"
            value={form.transactionPin}
            maxLength={4}
            onChange={handlePinChange}
            className="w-full mt-2 bg-slate-800 rounded-lg p-4 text-white"
          />
        </div>

        {error && (
          <div className="md:col-span-2 bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-green-600 hover:bg-green-700 transition py-4 rounded-xl text-white font-bold disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-green-400 font-semibold hover:text-green-300"
          >
            Login
          </Link>
        </p>
      </div>

    </div>
  );
}

export default SignupForm;