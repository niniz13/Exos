import { createContext } from "react";

type AuthContextType = {
  token: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;