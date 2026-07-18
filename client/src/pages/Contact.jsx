import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    setSuccess(
      "Your message has been received. Our support team will contact you shortly."
    );

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-6xl font-bold">
            Contact Us
          </h1>

          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Our support specialists are available to help you with
            your banking needs.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">

            <h2 className="text-3xl font-bold">
              Send us a Message
            </h2>

            <form
              onSubmit={submitForm}
              className="space-y-5 mt-8"
            >

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-green-500"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-green-500"
              />

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-green-500"
              />

              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-green-500"
              />

              <button
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold transition"
              >
                Send Message
              </button>

            </form>

            {success && (

              <div className="mt-6 bg-green-500/20 border border-green-500 rounded-xl p-4 text-green-400">

                {success}

              </div>

            )}

          </div>

          {/* Contact Info */}

          <div className="space-y-8">

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 flex gap-5">

              <FaPhoneAlt className="text-green-400 text-3xl mt-1" />

              <div>

                <h3 className="text-xl font-bold">
                  Phone Support
                </h3>

                <p className="text-gray-400 mt-2">
                  +1 (800) 935-9935
                </p>

              </div>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 flex gap-5">

              <FaEnvelope className="text-green-400 text-3xl mt-1" />

              <div>

                <h3 className="text-xl font-bold">
                  Email Support
                </h3>

                <p className="text-gray-400 mt-2">
                  support@jpmorganchase.com
                </p>

              </div>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 flex gap-5">

              <FaMapMarkerAlt className="text-green-400 text-3xl mt-1" />

              <div>

                <h3 className="text-xl font-bold">
                  Head Office
                </h3>

                <p className="text-gray-400 mt-2">
                  383 Madison Avenue
                  <br />
                  New York, NY 10179
                  <br />
                  United States
                </p>

              </div>

            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 flex gap-5">

              <FaClock className="text-green-400 text-3xl mt-1" />

              <div>

                <h3 className="text-xl font-bold">
                  Customer Support Hours
                </h3>

                <p className="text-gray-400 mt-2">
                  Monday - Friday
                  <br />
                  8:00 AM - 8:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Map Placeholder */}

      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl h-96 flex items-center justify-center">

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              Branch Location
            </h2>

            <p className="text-gray-400 mt-3">
              Interactive map will be integrated here.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;