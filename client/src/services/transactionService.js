import { addNotification } from "./notificationService";

const API_URL = `${import.meta.env.VITE_API_URL}/api/transactions`;

// ==========================================
// GET TRANSACTIONS
// ==========================================
export async function getTransactions(customerId = null) {
  try {
    const url = customerId
      ? `${API_URL}/customer/${customerId}`
      : API_URL;

    const response = await fetch(url);

    const data = await response.json();

    if (!data.success) {
      return [];
    }

    return data.transactions || data.transfers || [];

  } catch (error) {

    console.error(
      "Failed to fetch transactions:",
      error
    );

    return [];
  }
}

// ==========================================
// CREATE TRANSFER
// ==========================================
export async function saveTransaction(transaction) {

  try {

    const payload = {
      customerId:
        transaction.customerId ||
        transaction.customer_id,

      bank:
        transaction.bank,

      recipientName:
        transaction.recipient ||
        transaction.recipient_name,

      recipientAccount:
        transaction.recipientAccount ||
        transaction.recipient_account,

      amount:
        Number(transaction.amount),

      narration:
        transaction.narration ||
        transaction.description ||
        ""
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!data.success) {
      return null;
    }

    addNotification(
      "Transfer Submitted",
      `Your transfer of $${Number(
        payload.amount
      ).toLocaleString()} to ${
        payload.recipientName
      } has been submitted.`
    );

    return data.transaction;

  } catch (error) {

    console.error(
      "Transaction creation failed:",
      error
    );

    return null;
  }
}

// ==========================================
// APPROVE TRANSFER
// ==========================================
export async function approveTransaction(id) {

  try {

    const response = await fetch(
      `${API_URL}/${id}/approve`,
      {
        method: "PUT"
      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.error(error);

    return {
      success: false
    };
  }
}

// ==========================================
// CREATE DEPOSIT
// ==========================================
export async function createDepositTransaction(transaction) {

  return saveTransaction({

    customerId:
      transaction.customerId,

    bank:
      "JP Morgan Chase",

    recipient:
      transaction.customerName ||
      "Customer Account",

    recipientAccount:
      transaction.accountNumber || "",

    amount:
      transaction.amount,

    narration:
      transaction.description ||
      "Account Funding"

  });

}

// ==========================================
// CLEAR TRANSACTIONS
// ==========================================
export function clearTransactions() {

  console.log(
    "Transactions are stored in PostgreSQL."
  );

}