import api from "./api";

export async function signIn(login: string, password: string) {
  if (!login || !password) return null
  try {
    const result = await api.post('/auth/login', { login, password })
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}