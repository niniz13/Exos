import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { userLogin } from "../services/loginService";
import { useNavigate } from "react-router-dom";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    const responseToken = await userLogin(email, password);
    setToken(responseToken);
    navigate("/tasks");
  }
  const logout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
