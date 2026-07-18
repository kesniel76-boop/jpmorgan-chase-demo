import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLoginForm() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    setLoading(true);

    setTimeout(() => {

      if (
        username === "admin@jpmorganchase.com" &&
        password === "Admin@2026"
      ) {

        localStorage.setItem(
          "pcb_admin",
          "true"
        );

        navigate("/admin");

      } else {

        setError("Invalid administrator credentials.");

      }

      setLoading(false);

    }, 2000);

  };

  return (

    <div className="bg-slate-900 p-10 rounded-3xl w-full max-w-md border border-slate-700">

      <h1 className="text-4xl font-bold text-white">

        Admin Login

      </h1>

      <p className="text-gray-400 mt-3">

        Authorized Personnel Only

      </p>

      <form
        onSubmit={handleLogin}
        className="space-y-6 mt-8"
      >

        <input
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          placeholder="Username"
          className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
        />

        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
        />

        {error && (

          <p className="text-red-400">

            {error}

          </p>

        )}

        <button
          className="w-full bg-green-500 hover:bg-green-600 rounded-xl p-4 font-bold"
          disabled={loading}
        >

          {loading ? "Signing In..." : "Login"}

        </button>

      </form>

    </div>

  );

}

export default AdminLoginForm;