import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(
    localStorage.getItem("ticketapp_session") || null
  );

  const login = (username, token) => {
    localStorage.setItem("ticketapp_session", token);
    setSession(token);
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setSession(null);
  };

  useEffect(() => {
    const stored = localStorage.getItem("ticketapp_session");
    setSession(stored);
  }, []);

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
