import api from "./api";

export async function registerCustomer(data) {
  const response = await api.post("/auth/register", data);
  return response.data;
}

export async function loginCustomer(data) {
  const response = await api.post("/auth/login", data);
  return response.data;
}