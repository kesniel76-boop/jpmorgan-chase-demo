import {
  FaUniversity,
  FaExchangeAlt,
  FaCreditCard,
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaUniversity className="text-5xl text-green-400" />,
      title: "Personal Banking",
      description:
        "Secure checking and savings accounts designed to help you manage your finances with confidence.",
    },
    {
      icon: <FaExchangeAlt className="text-5xl text-green-400" />,
      title: "Domestic & International Transfers",
      description:
        "Send and receive money quickly with secure domestic and international payment services.",
    },
    {
      icon: <FaCreditCard className="text-5xl text-green-400" />,
      title: "Credit & Debit Cards",
      description:
        "Manage your virtual and physical cards with spending controls and real-time security alerts.",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-green-400" />,
      title: "Digital Banking",
      description:
        "Access your accounts 24/7 from your phone, tablet or computer with our modern banking platform.",
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-400" />,
      title: "Fraud Protection",
      description:
        "Advanced fraud monitoring and multi-layer authentication help keep your accounts secure.",
    },
    {
      icon: <FaChartLine className="text-5xl text-green-400" />,
      title: "Investment Solutions",
      description:
        "Grow your wealth with investment products, retirement planning and financial guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-6xl font-bold">
            Banking Services
          </h1>

          <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto leading-8">
            Explore a complete range of financial solutions designed
            to make banking easier, safer and more convenient for
            individuals and businesses.
          </p>

        </div>

      </section>

      {/* Services Grid */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-500 hover:-translate-y-2 transition duration-300"
            >
              {service.icon}

              <h2 className="text-2xl font-bold mt-6">
                {service.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-green-600 py-16">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Start Banking?
          </h2>

          <p className="mt-4 text-lg">
            Open an account today and enjoy secure digital banking with
            JP Morgan Chase.
          </p>

          <a
            href="/signup"
            className="inline-block mt-8 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Open an Account
          </a>

        </div>

      </section>

    </div>
  );
}

export default Services;