import api from "./api";

export const getAllTransfers = async () => {
  try {
    const response = await api.get("/admin/transfers");

    return {
      success: true,
      transfers: response.data.transfers,
    };
  } catch (error) {
    return {
      success: false,
      transfers: [],
      message:
        error.response?.data?.message ||
        "Unable to load transfers.",
    };
  }
};

export const approveTransfer = async (id) => {
  try {
    const response = await api.put(
      `/admin/approve/${id}`
    );

    return {
      success: true,
      transaction: response.data.transaction,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Unable to approve transfer.",
    };
  }
};