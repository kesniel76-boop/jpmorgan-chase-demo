import { FaUniversity } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
        <FaUniversity className="text-2xl text-white" />
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
        JP Morgan Chase
        </h1>

        <p className="text-xs tracking-widest text-green-400 uppercase">
          Banking Without Limits
        </p>
      </div>
    </div>
  );
}

export default Logo;