import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    // Oturum açıldığında LocalStorage'a kaydedin
    localStorage.setItem("isLoggedIn", "true");
  };


  const navigate = useNavigate();
  const logout = () => {
    setIsLoggedIn(false);
    // Oturumu kapattıktan sonra yönlendirme yapın
    navigate("/"); // Örneğin ana sayfaya yönlendiriliyor

    localStorage.removeItem("isLoggedIn");
  };



  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};