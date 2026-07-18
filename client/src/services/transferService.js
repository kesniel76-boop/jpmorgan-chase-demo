import api from "./api";

export const createTransfer = async (transferData) => {
  try {
    const response = await api.post(
      "/transfers",
      transferData
    );

    return {
      success: true,
      transaction: response.data.transaction,
      balance: response.data.balance,
      message: response.data.message,
    };

  } catch (error) {

    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Unable to complete transfer.",
    };

  }
};

// ==============================
// CUSTOMER TRANSACTION HISTORY
// ==============================

export const getCustomerTransfers = async (
  customerId
) => {
  try {

    const response = await api.get(
      `/transfers/customer/${customerId}`
    );

    return {
      success: true,
      transactions:
        response.data.transactions,
    };

  } catch (error) {

    return {
      success: false,
      transactions: [],
    };

  }
};

// ==============================
// ADMIN
// ==============================

export const getAllTransfers = async () => {
  const response = await api.get(
    "/admin/transfers"
  );

  return response.data.transfers;
};

export const approveTransfer = async (id) => {
  const response = await api.put(
    `/admin/approve/${id}`
  );

  return response.data;
};