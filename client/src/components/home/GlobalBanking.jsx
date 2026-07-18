import { motion } from "framer-motion";
import {
  FaGlobeAmericas,
  FaExchangeAlt,
  FaMobileAlt,
  FaWallet,
} from "react-icons/fa";


const features = [
  {
    icon: <FaGlobeAmericas />,
    title: "Global Access",
    text: "Manage your money from anywhere in the world with international banking support.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Instant Transfers",
    text: "Send and receive funds quickly with secure digital transactions.",
  },
  {
    icon: <FaWallet />,
    title: "Multi-Currency Wallet",
    text: "Hold and manage multiple currencies from one powerful account.",
  },
];


function GlobalBanking() {

  return (

    <section className="bg-slate-950 py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">


        {/* Header */}

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

            Global Banking Without Limits

          </h2>


          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">

            PenCraft Bank connects your financial world with
            secure international banking solutions.

          </p>


        </motion.div>





        <div className="grid lg:grid-cols-2 gap-12 items-center">



          {/* Left Features */}


          <div className="space-y-6">


            {features.map((item,index)=>(


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
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
                "

              >


                <div className="
                text-green-400
                text-4xl
                ">

                  {item.icon}

                </div>



                <div>

                  <h3 className="text-xl font-semibold text-white">

                    {item.title}

                  </h3>


                  <p className="text-gray-400 mt-2">

                    {item.text}

                  </p>


                </div>


              </motion.div>


            ))}


          </div>





          {/* Right Banking Interface */}


          <motion.div

            initial={{
              opacity:0,
              scale:0.8
            }}

            whileInView={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:0.8
            }}

            viewport={{
              once:true
            }}

            className="
            bg-gradient-to-br
            from-blue-700
            via-slate-900
            to-green-500
            rounded-[40px]
            p-8
            shadow-2xl
            "

          >



            <div className="
            bg-slate-950
            rounded-3xl
            p-8
            ">


              <FaMobileAlt className="
              text-green-400
              text-6xl
              mb-8
              "/>



              <h3 className="
              text-white
              text-3xl
              font-bold
              ">

                Mobile Banking App

              </h3>


              <p className="
              text-gray-400
              mt-4
              ">

                Control your accounts, transfer money,
                and monitor your finances anywhere.

              </p>




              {/* Balance Card */}


              <div className="
              mt-8
              bg-slate-900
              rounded-2xl
              p-6
              border
              border-slate-800
              ">


                <p className="text-gray-400">

                  Available Balance

                </p>


                <h4 className="
                text-white
                text-4xl
                font-bold
                mt-2
                ">

                  $25,840.50

                </h4>



                <div className="
                flex
                justify-between
                mt-6
                text-sm
                ">

                  <span className="text-green-400">

                    +4.8% Growth

                  </span>


                  <span className="text-gray-400">

                    This Month

                  </span>


                </div>


              </div>



              <button className="
              mt-8
              w-full
              bg-green-500
              hover:bg-green-400
              text-black
              font-semibold
              py-4
              rounded-xl
              transition
              ">

                Explore Digital Banking

              </button>


            </div>


          </motion.div>


        </div>


      </div>


    </section>

  );

}


export default GlobalBanking;