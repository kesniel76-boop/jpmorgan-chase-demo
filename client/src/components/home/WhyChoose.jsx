import { motion } from "framer-motion";
import {
  FaGlobe,
  FaShieldAlt,
  FaChartLine,
  FaCreditCard,
} from "react-icons/fa";


const stats = [
  {
    number: "15+",
    title: "Years Experience",
  },
  {
    number: "250K+",
    title: "Customers Worldwide",
  },
  {
    number: "99.9%",
    title: "Platform Security",
  },
  {
    number: "120+",
    title: "Countries Supported",
  },
];


const features = [
  {
    icon: <FaShieldAlt />,
    title: "Bank-Level Security",
    text: "Advanced encryption and security systems protect your financial data.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Banking",
    text: "Access modern banking services across multiple countries worldwide.",
  },
  {
    icon: <FaChartLine />,
    title: "Smart Financial Tools",
    text: "Powerful tools help you manage, track, and grow your finances.",
  },
];


function WhyChoose() {

  return (

    <section className="bg-slate-900 py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          viewport={{
            once:true
          }}

          className="text-center mb-16"

        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Why Choose JP MORGAN CHASE?

          </h2>


          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">

            Experience secure, intelligent and globally connected banking
            designed for individuals and businesses.

          </p>


        </motion.div>



        {/* Statistics */}


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">


          {stats.map((stat,index)=>(

            <motion.div

              key={index}

              initial={{
                opacity:0,
                scale:0.8
              }}

              whileInView={{
                opacity:1,
                scale:1
              }}

              transition={{
                duration:0.5,
                delay:index*0.15
              }}

              viewport={{
                once:true
              }}

              className="
              bg-slate-950
              rounded-3xl
              p-8
              text-center
              border
              border-slate-800
              "

            >

              <h3 className="text-4xl font-bold text-green-400">

                {stat.number}

              </h3>


              <p className="text-gray-400 mt-3">

                {stat.title}

              </p>


            </motion.div>

          ))}


        </div>




        {/* Feature Cards + Card Mockup */}


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Features */}


          <div className="space-y-6">


          {features.map((feature,index)=>(

            <motion.div

              key={index}

              initial={{
                opacity:0,
                x:-40
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              transition={{
                duration:0.6,
                delay:index*0.2
              }}

              viewport={{
                once:true
              }}

              className="
              flex
              gap-5
              bg-slate-950
              p-6
              rounded-3xl
              border
              border-slate-800
              "

            >


              <div className="
              text-green-400
              text-3xl
              ">

                {feature.icon}

              </div>


              <div>

                <h3 className="text-xl font-semibold text-white">

                  {feature.title}

                </h3>


                <p className="text-gray-400 mt-2">

                  {feature.text}

                </p>

              </div>


            </motion.div>


          ))}


          </div>





          {/* Floating Card */}


          <motion.div

            animate={{
              y:[0,-15,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
            bg-gradient-to-br
            from-green-500
            to-blue-600
            rounded-3xl
            p-8
            shadow-2xl
            "

          >

            <FaCreditCard className="text-white text-6xl mb-12"/>


            <h3 className="text-white text-3xl font-bold">

              JP MORGAN CHASE Platinum Card

            </h3>


            <p className="text-white/80 mt-4">

              Premium banking card designed for global lifestyles.

            </p>


            <div className="
            mt-10
            bg-white/20
            rounded-xl
            p-5
            text-white
            ">

              **** **** **** 2048

            </div>


          </motion.div>


        </div>


      </div>


    </section>

  );

}


export default WhyChoose;