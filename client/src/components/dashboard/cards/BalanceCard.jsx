import {
  FaCcMastercard,
  FaWifi,
} from "react-icons/fa";

import { useEffect, useState } from "react";

import { useAuth } from "../../../contexts/AuthContext";

import { getCustomer } from "../../../services/customerService";



function BalanceCard() {


  const {
  user,
  balanceRefresh
} = useAuth();


  const [customer, setCustomer] = useState(user);



  useEffect(() => {


    async function loadCustomerBalance() {


      if (!user?.customerId) {

        return;

      }


      const latestCustomer = await getCustomer(
        user.customerId
      );


      if (latestCustomer) {

        setCustomer(latestCustomer);

      }


    }


    loadCustomerBalance();


  }, [user, balanceRefresh]);





  return (

    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 p-8 shadow-2xl">


      <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>



      <div className="flex justify-between items-center">


        <div>

          <h2 className="text-2xl font-bold text-white">
            JP Morgan Chase
          </h2>


          <p className="text-white/70 mt-1">
            Platinum Digital Account
          </p>


        </div>


        <FaWifi className="text-3xl text-white rotate-90" />


      </div>




      <div className="mt-12">


        <p className="text-white/70">
          Available Balance
        </p>


        <h1 className="text-5xl font-bold text-white mt-3">


          {customer?.currency || "$"}

          {(Number(customer?.balance) || 0).toLocaleString()}


        </h1>


      </div>





      <div className="mt-10 flex justify-between items-end">


        <div>


          <p className="text-white/60 text-sm">
            Card Holder
          </p>


          <h3 className="text-white text-xl font-semibold">

            {
              customer?.first_name
                ? `${customer.first_name} ${customer.last_name}`
                : customer?.name || "JP Customer"
            }

          </h3>



          <p className="text-white/70 mt-2 tracking-widest">

            **** **** **** 6789

          </p>


        </div>




        <FaCcMastercard className="text-6xl text-white" />


      </div>


    </div>

  );

}


export default BalanceCard;