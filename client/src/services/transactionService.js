import { addNotification } from "./notificationService";


const API_URL = "http://localhost:5000/api/transactions";



// GET CUSTOMER TRANSACTIONS FROM POSTGRESQL

export async function getTransactions(customerId) {

  try {

    const response = await fetch(
      `${API_URL}/${customerId}`
    );


    const data = await response.json();


    if(data.success){

      return data.transactions;

    }


    return [];


  } catch(error){

    console.error(
      "Failed to fetch transactions:",
      error
    );


    return [];

  }

}






// CREATE TRANSACTION IN POSTGRESQL

export async function saveTransaction(transaction) {


  try {


    const payload = {


      reference:
        transaction.reference ||
        `TXN-${Date.now()}`,


      customer_id:
        transaction.customerId ||
        transaction.customer_id,


      sender_name:
        transaction.senderName ||
        transaction.sender_name,


      sender_account:
        transaction.senderAccount ||
        transaction.sender_account,


      recipient_name:
        transaction.recipient ||
        transaction.recipient_name,


      recipient_account:
        transaction.recipientAccount ||
        transaction.recipient_account,


      bank:
        transaction.bank,


      amount:
        Number(transaction.amount),


      narration:
        transaction.narration ||
        transaction.description ||
        "Transfer",


      transaction_type:
        transaction.type ||
        "Transfer",


      status:
        transaction.status ||
        "Pending"

    };



    const response = await fetch(
      API_URL,
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify(payload)

      }
    );



    const data = await response.json();



    if(data.success){


      addNotification(
        "Transfer Submitted",
        `Your transfer of $${Number(
          transaction.amount
        ).toLocaleString()} to ${
          transaction.recipient
        } has been submitted.`
      );


      return data.transaction;


    }



    return null;



  }catch(error){


    console.error(
      "Transaction creation failed:",
      error
    );


    return null;

  }

}







// ADMIN APPROVAL (TEMPORARY)
// We will connect this to backend later

export async function approveTransaction(id){


  console.log(
    "Approve transaction:",
    id
  );


}







// CREATE DEPOSIT TRANSACTION

export async function createDepositTransaction(transaction){


  return saveTransaction({

    reference:
      `DEP-${Date.now()}`,

    customerId:
      transaction.customerId,

    senderName:
      "External Deposit",


    senderAccount:
      "",


    recipient:
      transaction.customerName ||
      "Customer Account",


    recipientAccount:
      transaction.accountNumber ||
      "",


    bank:
      "JP Morgan Chase",


    amount:
      transaction.amount,


    narration:
      transaction.description ||
      "Account funding",


    type:
      "Deposit",


    status:
      "Successful"

  });


}







// NO LONGER NEEDED WITH DATABASE

export function clearTransactions(){

  console.log(
    "Transactions are stored in PostgreSQL"
  );

}