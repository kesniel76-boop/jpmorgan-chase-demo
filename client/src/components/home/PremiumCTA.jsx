import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaMobileAlt,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";


function PremiumCTA() {

  return (

    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">


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

          className="
          bg-gradient-to-r
          from-green-500
          via-blue-600
          to-slate-900
          rounded-[40px]
          p-10
          md:p-16
          overflow-hidden
          "

        >


          <div className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
          ">


            {/* Text */}


            <div>


              <h2 className="
              text-4xl
              md:text-5xl
              font-black
              text-white
              ">

                Open Your Account Today

              </h2>



              <p className="
              text-white/80
              text-lg
              mt-5
              leading-8
              ">

                Experience secure digital banking,
                global transfers, and premium financial
                solutions with PenCraft Bank.

              </p>




              <div className="
              flex
              flex-wrap
              gap-5
              mt-8
              ">


                <button className="
                bg-white
                text-black
                px-8
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                gap-3
                hover:scale-105
                transition
                ">

                  Create Account

                  <FaArrowRight/>

                </button>



                <button className="
                border
                border-white/40
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-white/10
                transition
                ">

                  Login

                </button>


              </div>


            </div>





            {/* Mobile App Card */}


            <motion.div

              animate={{
                y:[0,-15,0]
              }}

              transition={{
                duration:4,
                repeat:Infinity
              }}

              className="
              bg-slate-950
              rounded-3xl
              p-8
              "

            >


              <FaMobileAlt className="
              text-green-400
              text-6xl
              "/>



              <h3 className="
              text-white
              text-3xl
              font-bold
              mt-6
              ">

                Banking On The Go

              </h3>


              <p className="
              text-gray-400
              mt-4
              ">

                Download the PenCraft mobile banking
                application and manage your finances anywhere.

              </p>




              <div className="
              flex
              gap-4
              mt-8
              ">


                <div className="
                bg-slate-800
                rounded-xl
                px-5
                py-3
                text-white
                flex
                items-center
                gap-2
                ">

                  <FaApple/>

                  App Store

                </div>



                <div className="
                bg-slate-800
                rounded-xl
                px-5
                py-3
                text-white
                flex
                items-center
                gap-2
                ">

                  <FaGooglePlay/>

                  Google Play

                </div>


              </div>


            </motion.div>



          </div>


        </motion.div>


      </div>


    </section>

  );

}


export default PremiumCTA;