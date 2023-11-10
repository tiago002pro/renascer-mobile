import React, { createContext, useState, useEffect, useContext } from "react";
import { doLogin } from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');

      if (storageToken && storageUser) {
        api.defaults.headers['Content-Type'] ='application/json'
        api.defaults.headers['Accept'] ='application/json'
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
    setLoading(false);
  }, []);

  async function signIn(email, password) {
    const response = await doLogin(email, password)
    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:token', response.token);
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      api.defaults.headers['Authorization'] = null
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
