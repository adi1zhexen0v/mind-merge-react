import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? true : false;
  });

  function login(token) {
    setIsAuth(true);
    localStorage.setItem("token", token);
  }

  function logout() {
    setIsAuth(false);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
