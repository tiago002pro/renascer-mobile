import api from "./api";

export async function doLogin(login: string, password: string) {
  if(!login || !password) return null
  try {
    const result = await api.post('/auth/login', {
      login,
      password
    })
    return result.data
  } catch(error) {
    console.log(error);
    return null
  }
}

export async function doRegister(name: string, login: string, password: string) {
  if(!name || !login || !password) return null
  try {
    var role: string = 'USER'
    const result = await api.post('/auth/register', {
      name,
      login,
      password,
      role
    })
    return result.data
  } catch (error) {
    console.log(error);
    return null
  }
}