import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

function Loader({
  title = "JPMorgan Chase",
  message = "Securing your banking experience...",
}) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-500/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center backdrop-blur-md shadow-2xl">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20"
        >
          <FaUniversity className="text-5xl text-green-400" />
        </motion.div>

        <h1 className="mt-8 text-4xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-3 text-gray-400">
          {message}
        </p>

        <div className="mt-10 h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full rounded-full bg-green-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.p
          className="mt-6 text-sm text-gray-500"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          Please wait...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;