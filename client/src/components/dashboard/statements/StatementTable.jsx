import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

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



function StatementTable() {


  const [search, setSearch] = useState("");

  const [
    transactions,
    setTransactions
  ] = useState([]);


  const [
    loading,
    setLoading
  ] = useState(true);




  useEffect(()=>{

    loadStatements();

  }, []);




  async function loadStatements(){


    const user = getCurrentUser();



    if(!user){

      setLoading(false);

      return;

    }



    const data =
      await getTransactions(
        user.customerId
      );



    setTransactions(
      data || []
    );


    setLoading(false);


  }






  const filtered =
    transactions.filter((transaction)=>{


      const text = `

        ${transaction.recipient_name || ""}

        ${transaction.bank || ""}

        ${transaction.reference || ""}

      `.toLowerCase();



      return text.includes(
        search.toLowerCase()
      );


    });







  return (

    <div className="mt-10">


      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">


        <div className="p-6 border-b border-slate-800">


          <div className="relative">


            <FaSearch className="absolute left-4 top-4 text-gray-500" />


            <input

              type="text"

              placeholder="Search by recipient, bank or reference..."

              value={search}

              onChange={(e)=>setSearch(e.target.value)}

              className="w-full bg-slate-800 rounded-xl pl-12 p-4 text-white outline-none"

            />


          </div>


        </div>





        <table className="w-full text-gray-300">


          <thead className="bg-slate-800">


            <tr>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="text-left">
                Recipient
              </th>

              <th className="text-left">
                Bank
              </th>

              <th className="text-left">
                Amount
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-left">
                Receipt
              </th>


            </tr>


          </thead>





          <tbody>



          {loading ? (


            <tr>

              <td
                colSpan="6"
                className="p-10 text-center text-gray-400"
              >

                Loading statements...

              </td>

            </tr>



          ) : filtered.length === 0 ? (


            <tr>

              <td
                colSpan="6"
                className="p-10 text-center text-gray-500"
              >

                No transactions found.

              </td>

            </tr>



          ) : (



            filtered.map((transaction)=>(



              <tr

                key={transaction.id}

                className="border-t border-slate-800"

              >



                <td className="p-4">

                  {new Date(
                    transaction.created_at
                  ).toLocaleString()}

                </td>





                <td>


                  <div className="flex items-center gap-3">


                    {transaction.transaction_type === "Deposit" ? (

                      <FaArrowDown className="text-green-400" />

                    ) : (

                      <FaArrowUp className="text-red-400" />

                    )}



                    {transaction.recipient_name}



                  </div>


                </td>





                <td>

                  {transaction.bank}

                </td>





                <td>

                  $

                  {Number(
                    transaction.amount
                  ).toLocaleString()}


                </td>





                <td>


                  <span

                    className={`px-3 py-1 rounded-full ${badge(
                      transaction.status
                    )}`}

                  >

                    {transaction.status}


                  </span>


                </td>





                <td>


                  <Link

                    to={`/transaction/${transaction.id}`}

                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"

                  >

                    View

                  </Link>


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


export default StatementTable;