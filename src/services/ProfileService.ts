import axios from "axios"

export async function getAddressByCep(cep: string): Promise<any> {
  try {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}