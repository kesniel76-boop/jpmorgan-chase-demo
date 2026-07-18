import {
  FaWallet,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaPiggyBank,
} from "react-icons/fa6";


import { useAuth } from "../../../contexts/AuthContext";


function SummaryCards() {


  const { user } = useAuth();


  const balance = Number(user?.balance || 0);


  const currency = user?.currency || "$";



  const cards = [

    {
      title: "Available Balance",
      amount: `${currency}${balance.toLocaleString()}`,
      icon: <FaWallet />,
      color: "bg-green-500",
    },


    {
      title: "Monthly Income",
      amount: `${currency}0.00`,
      icon: <FaArrowTrendUp />,
      color: "bg-blue-500",
    },


    {
      title: "Monthly Expenses",
      amount: `${currency}0.00`,
      icon: <FaArrowTrendDown />,
      color: "bg-red-500",
    },


    {
      title: "Savings",
      amount: `${currency}${balance.toLocaleString()}`,
      icon: <FaPiggyBank />,
      color: "bg-yellow-500",
    },

  ];



  return (


    <div className="mt-12">


      <h2 className="text-2xl font-bold text-white mb-6">

        Account Summary

      </h2>



      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">



        {cards.map((card) => (


          <div

            key={card.title}

            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition duration-300"

          >


            <div

              className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center text-white text-2xl`}

            >

              {card.icon}

            </div>



            <p className="text-gray-400 mt-6">

              {card.title}

            </p>



            <h2 className="text-3xl font-bold text-white mt-2">

              {card.amount}

            </h2>



          </div>


        ))}



      </div>



    </div>


  );


}


export default SummaryCards;