import {
  FaUniversity,
  FaShieldAlt,
  FaGlobeAmericas,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-6xl font-bold">
            About JP Morgan Chase
          </h1>

          <p className="text-gray-300 mt-6 text-xl max-w-3xl leading-9">
            JP Morgan Chase is committed to providing secure,
            innovative and reliable digital banking experiences.
            Our platform enables customers to manage finances,
            make transfers, monitor accounts and access banking
            services anytime and anywhere.
          </p>

        </div>

      </section>

      {/* Mission */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold">
              Our Mission
            </h2>

            <p className="text-gray-400 mt-6 leading-8">

              We strive to deliver trusted financial services
              backed by innovation, security and exceptional
              customer experiences. Our goal is to make digital
              banking simple, fast and accessible.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

              <FaUniversity className="text-5xl text-green-400" />

              <h3 className="mt-5 text-xl font-bold">
                Banking Excellence
              </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

              <FaShieldAlt className="text-5xl text-green-400" />

              <h3 className="mt-5 text-xl font-bold">
                Trusted Security
              </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

              <FaGlobeAmericas className="text-5xl text-green-400" />

              <h3 className="mt-5 text-xl font-bold">
                Global Presence
              </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

              <FaUsers className="text-5xl text-green-400" />

              <h3 className="mt-5 text-xl font-bold">
                Millions of Customers
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="bg-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>

              <h2 className="text-5xl font-bold text-green-400">
                80M+
              </h2>

              <p className="text-gray-400 mt-3">
                Customers
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-green-400">
                100+
              </h2>

              <p className="text-gray-400 mt-3">
                Countries
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-green-400">
                24/7
              </h2>

              <p className="text-gray-400 mt-3">
                Digital Banking
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-green-400">
                99.9%
              </h2>

              <p className="text-gray-400 mt-3">
                Secure Transactions
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;