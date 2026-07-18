import api from "./api";

export const getTransfers = async () => {
  const { data } = await api.get("/admin/transfers");
  return data.transfers;
};

export const approveTransfer = async (id) => {
  const { data } = await api.put(`/admin/approve/${id}`);
  return data.transaction;
};