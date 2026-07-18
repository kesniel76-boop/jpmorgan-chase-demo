import { useEffect, useState } from "react";

import {
  getCustomers,
  updateCustomerDatabase
} from "../../services/customerService";

import {
  createDepositTransaction
} from "../../services/transactionService";



function CustomerTable() {


  const [customers, setCustomers] = useState([]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [amount, setAmount] = useState("");





  useEffect(() => {

    loadCustomers();

  }, []);





  const loadCustomers = async () => {


    const data = await getCustomers();


    setCustomers(data);


  };







  const toggleStatus = async (customer) => {


    const newStatus =
      customer.status === "Frozen"
        ? "Active"
        : "Frozen";



    await updateCustomerDatabase(

      customer.customer_id,

      {

        status:newStatus

      }

    );



    loadCustomers();


  };








  const topUpAccount = async () => {


    if(
      !amount ||
      !selectedCustomer
    ) return;




    const newBalance =

      Number(selectedCustomer.balance || 0)
      +
      Number(amount);





    await updateCustomerDatabase(

      selectedCustomer.customer_id,

      {

        balance:newBalance

      }

    );





    await createDepositTransaction({

      customerId:
        selectedCustomer.customer_id,

      amount,

      description:
        "Admin account funding"

    });





    setAmount("");

    setSelectedCustomer(null);


    loadCustomers();


  };







  return (


    <div className="mt-10 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">



      <table className="w-full text-gray-300">



        <thead className="bg-slate-800">


          <tr>


            <th className="p-4 text-left">
              Customer
            </th>


            <th className="text-left">
              Account
            </th>


            <th className="text-left">
              Balance
            </th>


            <th className="text-left">
              Status
            </th>


            <th className="text-left">
              Action
            </th>


          </tr>


        </thead>





        <tbody>



        {customers.map((customer)=>(



          <tr

            key={customer.customer_id}

            className="border-t border-slate-800"

          >




            <td className="p-4">


              {customer.first_name}

              {" "}

              {customer.last_name}



              <div className="text-sm text-gray-500">

                {customer.email}

              </div>


            </td>





            <td>


              {customer.account_number}


            </td>





            <td>


              {customer.currency || "$"}

              {Number(customer.balance || 0)
              .toLocaleString()}


            </td>





            <td>


              {customer.status || "Active"}


            </td>






            <td className="space-x-2">



              <button


                onClick={() =>
                  toggleStatus(customer)
                }


                className="bg-blue-600 px-3 py-2 rounded-lg"


              >


                {
                  customer.status === "Frozen"
                    ? "Unfreeze"
                    : "Freeze"
                }


              </button>





              <button


                onClick={() =>
                  setSelectedCustomer(customer)
                }


                className="bg-green-600 px-3 py-2 rounded-lg"


              >

                Top Up


              </button>



            </td>



          </tr>



        ))}



        </tbody>



      </table>







      {selectedCustomer && (


        <div className="p-6 bg-slate-800">


          <h3 className="text-white text-xl">


            Top Up{" "}

            {selectedCustomer.first_name}

            {" "}

            {selectedCustomer.last_name}


          </h3>




          <input


            type="number"


            value={amount}


            onChange={(e)=>
              setAmount(e.target.value)
            }


            placeholder="Enter amount"


            className="mt-4 p-3 rounded text-black"


          />





          <button


            onClick={topUpAccount}


            className="ml-3 bg-green-600 px-5 py-3 rounded"


          >


            Confirm


          </button>




        </div>


      )}





    </div>


  );


}


export default CustomerTable;