import api from "./api";

const USER_KEY = "jpm_user";

const demoAdmin = {
  email: "admin@jpmorganchase.com",
  password: "Admin@12345",
};

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const user = response.data.user;

    localStorage.setItem(
      USER_KEY,
      JSON.stringify(user)
    );

    return {
      success: true,
      user,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Unable to login.",
    };
  }
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem(USER_KEY);
};

export const adminLogin = (email, password) => {
  if (
    email === demoAdmin.email &&
    password === demoAdmin.password
  ) {
    localStorage.setItem("jpm_admin", "true");
    return true;
  }

  return false;
};