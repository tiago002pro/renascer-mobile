import React, { createContext } from "react";
import { doLogin } from "../services/auth";

interface AuthContextData {
  signed: boolean;
  user: Object;
  signIn(email: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }: any) => {
  async function signIn(email, password) {
    const response = await doLogin(email, password)
    console.log("response", response);
  }
  
  return (
    <AuthContext.Provider value={{ signed: false, user: {}, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
