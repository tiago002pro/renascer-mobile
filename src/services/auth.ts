import api from "./api";
import jwtDecode from "jwt-decode";

interface Response {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  }
}

export async function doLogin(login: string, password: string): Promise<Response> {
  if (!login || !password) return null
  try {
    const result = await api.post('/auth/login', { login, password })
    const tokenDecoded: any = jwtDecode(result.data.token)

    return {
      token: result.data.token,
      user: {
        id: tokenDecoded.sub,
        name: tokenDecoded.name,
        email: tokenDecoded.email
      }
    }
  } catch(error) {
    console.log("error", error);
    return null
  }
}