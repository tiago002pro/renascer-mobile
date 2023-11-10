import api from "./api";

export async function loadUser(id: number): Promise<any> {
  try {
    const result = await api.get(`/api/user/${id}`)
    console.log("loadUser result", result);
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}