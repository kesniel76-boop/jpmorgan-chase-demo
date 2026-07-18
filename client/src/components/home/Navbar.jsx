import Logo from "../common/Logo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
         <Logo />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <Link to="/" className="hover:text-green-400 transition">
           Home
          </Link>

          <Link to="/about" className="hover:text-green-400 transition">
            About
          </Link>

          <Link to="/about" className="hover:text-green-400 transition">
            Services
          </Link>

          <Link to="/about" className="hover:text-green-400 transition">
            Contact
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
          to="/login"
          className="text-white hover:text-green-400 transition"
          >
            Login
          </Link>

          <Link
          to="/signup"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Create Account
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;