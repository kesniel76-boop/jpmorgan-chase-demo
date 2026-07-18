import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaGlobeAmericas,
  FaUsers,
} from "react-icons/fa";

import heroImage from "../../assets/images/banking-hero.jpg";

function Hero() {
  return (
   <section
  className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-black/70"></div>

  {/* Green Glow */}

  <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-500/20 blur-[180px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="max-w-3xl">

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="uppercase tracking-[0.4em] text-green-400 font-semibold"
      >
        JP Morgan Chase
      </motion.p>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .8 }}
        className="text-6xl lg:text-8xl font-black leading-tight mt-6"
      >
        Banking Built
        <span className="block text-green-400">
          For Your Future
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="text-gray-300 text-xl leading-9 mt-8 max-w-2xl"
      >
        Experience secure digital banking with world-class
        financial solutions, international transfers,
        premium cards, investment services and
        enterprise-grade security trusted by millions
        around the world.
      </motion.p>

      <div className="flex flex-wrap gap-5 mt-10">

        <Link
          to="/signup"
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition"
        >
          Open Account
          <FaArrowRight />
        </Link>

        <Link
          to="/login"
          className="border border-white/30 hover:border-green-400 hover:text-green-400 px-8 py-4 rounded-xl transition"
        >
          Login
        </Link>

      </div>

    </div>

    {/* Floating Stats */}

    <div className="grid lg:grid-cols-3 gap-6 mt-20">

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
      >
        <FaUsers className="text-green-400 text-4xl" />

        <h2 className="text-4xl font-bold mt-5">
          80M+
        </h2>

        <p className="text-gray-300 mt-2">
          Customers Worldwide
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
      >
        <FaGlobeAmericas className="text-green-400 text-4xl" />

        <h2 className="text-4xl font-bold mt-5">
          100+
        </h2>

        <p className="text-gray-300 mt-2">
          Countries Served
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
      >
        <FaShieldAlt className="text-green-400 text-4xl" />

        <h2 className="text-4xl font-bold mt-5">
          99.99%
        </h2>

        <p className="text-gray-300 mt-2">
          Secure Transactions
        </p>

      </motion.div>

    </div>

  </div>

</section>
  );
}

export default Hero;