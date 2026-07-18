import { motion } from "framer-motion";
import {
  FaUniversity,
  FaMobileAlt,
  FaExchangeAlt,
  FaLock,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUniversity />,
    title: "Personal Banking",
    text: "Open savings and current accounts with premium banking services."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Banking",
    text: "Manage your money securely from anywhere in the world."
  },
  {
    icon: <FaExchangeAlt />,
    title: "Instant Transfers",
    text: "Send and receive money within seconds across multiple banks."
  },
  {
    icon: <FaCreditCard />,
    title: "Premium Cards",
    text: "Virtual and physical debit cards with worldwide acceptance."
  },
  {
    icon: <FaChartLine />,
    title: "Investments",
    text: "Grow your wealth with smart investment opportunities."
  },
  {
    icon: <FaLock />,
    title: "Advanced Security",
    text: "Protected with bank-grade encryption and fraud monitoring."
  },
];

function FeaturesSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Everything You Need In One Bank
          </h2>

          <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto">
            Secure banking, smart financial tools, premium cards,
            investments and international money transfers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-green-500 transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-3xl">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold text-white mt-8">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;