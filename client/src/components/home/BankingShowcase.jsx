import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaCreditCard,
  FaExchangeAlt,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile Banking",
    text: "Manage your accounts anytime, anywhere with our secure digital banking platform.",
  },
  {
    icon: <FaCreditCard />,
    title: "Premium Cards",
    text: "Experience exclusive debit and credit cards designed for modern lifestyles.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Global Transfers",
    text: "Send and receive money securely with fast international transactions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Advanced Security",
    text: "Multi-layer protection keeps your financial information safe 24/7.",
  },
];

function BankingShowcase() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Premium Banking Services
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            Everything you need to manage your money securely,
            efficiently, and globally from one powerful platform.
          </p>

        </motion.div>


        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-12
              }}

              className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-8
              text-center
              shadow-xl
              hover:border-green-500/50
              transition
              "

            >

              <div
                className="
                w-20
                h-20
                mx-auto
                rounded-full
                bg-green-500/10
                text-green-400
                text-4xl
                flex
                items-center
                justify-center
                "
              >

                {service.icon}

              </div>


              <h3 className="text-2xl font-semibold text-white mt-8">
                {service.title}
              </h3>


              <p className="text-gray-400 mt-4 leading-7">
                {service.text}
              </p>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}


export default BankingShowcase;