import api from "./api";

export async function doLogin(login: string, password: string) {
  if(!login || !password) return null
  try {
    const result = await api.post('/auth/login', {
      login,
      password
    })
    console.log(result);
    return result.data
  } catch(error) {
    console.log(error);
    return null
  }
}