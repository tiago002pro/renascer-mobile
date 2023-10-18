import { RegisterUser } from "../interface/Register.interface";
import api from "./api";

export async function doLogin(login: string, password: string) {
  if (!login || !password) return null
  try {
    const result = await api.post('/auth/login', { login, password })
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}

export async function doRegister(user: RegisterUser) {
  if (!user.name || !user.login || !user.password) return null
  try {
    const result = await api.post('/auth/register', user)
    return result.data
  } catch (error) {
    console.log(error);
    return null
  }
}