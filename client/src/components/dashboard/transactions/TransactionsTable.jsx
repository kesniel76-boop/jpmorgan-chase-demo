import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { getCurrentUser } from "../../../services/authService";
import { getTransactions } from "../../../services/transactionService";


function badge(status) {

  if (
    status === "Successful" ||
    status === "Completed"
  ) {

    return "bg-green-500/20 text-green-400";

  }


  if (status === "Pending") {

    return "bg-yellow-500/20 text-yellow-300";

  }


  return "bg-red-500/20 text-red-400";

}



function TransactionsTable() {


  const navigate = useNavigate();


  const [
    transactions,
    setTransactions
  ] = useState([]);


  const [
    loading,
    setLoading
  ] = useState(true);



  useEffect(() => {

    loadTransactions();

  }, []);




  async function loadTransactions(){


    const user = getCurrentUser();



    if(!user){

      setLoading(false);

      return;

    }



    const result =
      await getTransactions(
        user.customerId
      );



    setTransactions(
      result || []
    );



    setLoading(false);


  }





  return (

    <div className="mt-12">


      <h2 className="text-2xl font-bold text-white mb-6">

        Recent Transactions

      </h2>




      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">



        <table className="w-full text-gray-300">



          <thead className="bg-slate-800">


            <tr>


              <th className="p-5 text-left">
                Date
              </th>


              <th className="text-left">
                Description
              </th>


              <th className="text-left">
                Type
              </th>


              <th className="text-left">
                Amount
              </th>


              <th className="text-left">
                Status
              </th>


            </tr>


          </thead>





          <tbody>



          {loading ? (


            <tr>

              <td
                colSpan="5"
                className="p-8 text-center text-gray-400"
              >

                Loading transactions...

              </td>

            </tr>



          ) : transactions.length === 0 ? (


            <tr>

              <td
                colSpan="5"
                className="p-8 text-center text-gray-500"
              >

                No transactions found.

              </td>

            </tr>



          ) : (



            transactions.map((t)=>(



              <tr

                key={t.id}


                onClick={()=>


                  navigate(
                    "/receipt",
                    {
                      state:{
                        transaction:t
                      }
                    }
                  )


                }


                className="border-t border-slate-800 hover:bg-slate-800 cursor-pointer transition"

              >



                <td className="p-5">


                  {new Date(
                    t.created_at
                  ).toLocaleString()}



                </td>





                <td>


                  Transfer to {t.recipient_name}



                  <p className="text-sm text-gray-500">

                    {t.bank}

                  </p>



                </td>





                <td>


                  <FaArrowUp className="text-red-400"/>


                  <span className="ml-2">

                    {t.transaction_type}

                  </span>


                </td>





                <td>


                  $

                  {Number(
                    t.amount
                  ).toLocaleString()}



                </td>





                <td>


                  <span

                    className={`px-4 py-2 rounded-full text-sm ${badge(
                      t.status
                    )}`}

                  >

                    {t.status}


                  </span>


                </td>




              </tr>



            ))



          )}



          </tbody>



        </table>



      </div>



    </div>


  );

}


export default TransactionsTable;