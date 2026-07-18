import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

import {
  FaUsers,
  FaUniversity,
  FaGlobe,
  FaShieldAlt,
  FaLock,
  FaCertificate,
  FaStar,
} from "react-icons/fa";


const stats = [
  {
    icon: <FaUsers />,
    value: 80,
    suffix: "M+",
    title: "Customers Worldwide",
  },
  {
    icon: <FaUniversity />,
    value: 4.2,
    prefix: "$",
    suffix: "T",
    decimals: 1,
    title: "Assets Managed",
  },
  {
    icon: <FaGlobe />,
    value: 100,
    suffix: "+",
    title: "Countries Served",
  },
  {
    icon: <FaShieldAlt />,
    value: 99.99,
    suffix: "%",
    decimals: 2,
    title: "Secure Transactions",
  },
];


const testimonials = [
  {
    name: "Michael Anderson",
    role: "Business Owner",
    text:
      "JP Morgan Chase provides a secure and seamless banking experience for managing my business finances.",
  },

  {
    name: "Sophia Martinez",
    role: "International Customer",
    text:
      "The global transfer system is fast, reliable, and easy to use from anywhere.",
  },

  {
    name: "David Williams",
    role: "Entrepreneur",
    text:
      "A modern banking platform with premium features and excellent security.",
  },
];



function TrustedSection() {

  return (

    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">

            Trusted by Millions

          </h2>


          <p className="text-gray-400 text-xl mt-5">

            Delivering secure, innovative and reliable banking
            experiences across the world.

          </p>

        </div>




        {/* Statistics */}


        <div className="
        grid
        lg:grid-cols-4
        md:grid-cols-2
        gap-8
        mt-20
        ">


          {stats.map((item,index)=>(


            <motion.div

              key={index}

              whileHover={{
                y:-10,
                scale:1.05
              }}

              className="
              bg-slate-800
              border
              border-slate-700
              rounded-3xl
              p-8
              text-center
              transition
              "

            >


              <div className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-green-500/20
              flex
              items-center
              justify-center
              text-green-400
              text-4xl
              ">

                {item.icon}

              </div>



              <h2 className="
              text-5xl
              font-black
              text-white
              mt-8
              ">


                {item.prefix}


                <AnimatedCounter

                  end={item.value}

                  duration={2500}

                  decimals={item.decimals || 0}

                />


                {item.suffix}


              </h2>



              <p className="text-gray-400 mt-4">

                {item.title}

              </p>


            </motion.div>


          ))}


        </div>





        {/* Security Trust */}


        <div className="
        grid
        md:grid-cols-3
        gap-8
        mt-20
        ">


          <TrustCard

            icon={<FaLock />}

            title="Bank-Level Encryption"

            text="Your financial information is protected with advanced security technology."

          />


          <TrustCard

            icon={<FaCertificate />}

            title="Certified Security"

            text="Designed with international banking security standards."

          />


          <TrustCard

            icon={<FaShieldAlt />}

            title="24/7 Protection"

            text="Continuous monitoring keeps your accounts safe."

          />


        </div>





        {/* Testimonials */}


        <div className="
        grid
        lg:grid-cols-3
        gap-8
        mt-20
        ">


          {testimonials.map((item,index)=>(


            <motion.div

              key={index}

              whileHover={{
                y:-10
              }}

              className="
              bg-slate-800
              border
              border-slate-700
              rounded-3xl
              p-8
              "

            >


              <div className="flex text-yellow-400 gap-1">


                {[1,2,3,4,5].map((star)=>(

                  <FaStar key={star}/>

                ))}


              </div>



              <p className="
              text-gray-300
              mt-5
              leading-7
              ">

                "{item.text}"

              </p>



              <h4 className="
              text-white
              font-bold
              mt-6
              ">

                {item.name}

              </h4>



              <p className="
              text-green-400
              text-sm
              ">

                {item.role}

              </p>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}




function TrustCard({icon,title,text}) {

  return (

    <div className="
    bg-slate-800
    border
    border-slate-700
    rounded-3xl
    p-8
    text-center
    ">


      <div className="
      text-green-400
      text-5xl
      flex
      justify-center
      ">

        {icon}

      </div>



      <h3 className="
      text-white
      text-xl
      font-bold
      mt-5
      ">

        {title}

      </h3>



      <p className="
      text-gray-400
      mt-3
      ">

        {text}

      </p>


    </div>

  );

}



export default TrustedSection;