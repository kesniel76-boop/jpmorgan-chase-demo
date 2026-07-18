import {
  createContext,
  useContext,
  useState,
} from "react";


const AuthContext = createContext(null);


const USER_KEY = "jpm_user";



export function AuthProvider({ children }) {


  const [user, setUser] = useState(() => {


    const savedUser =
      localStorage.getItem(USER_KEY);


    return savedUser
      ? JSON.parse(savedUser)
      : null;


  });



  const [
    balanceRefresh,
    setBalanceRefresh
  ] = useState(0);




  const login = (userData) => {


    setUser(userData);


    localStorage.setItem(
      USER_KEY,
      JSON.stringify(userData)
    );


  };





  const logout = () => {


    setUser(null);


    localStorage.removeItem(
      USER_KEY
    );


  };





  // Call this after successful transfer

  const refreshBalance = () => {


    setBalanceRefresh(
      (prev)=>prev + 1
    );


  };






  return (

    <AuthContext.Provider

      value={{

        user,

        login,

        logout,

        balanceRefresh,

        refreshBalance

      }}

    >

      {children}


    </AuthContext.Provider>

  );


}






export function useAuth() {

  return useContext(AuthContext);

}