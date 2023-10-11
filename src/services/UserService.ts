import { User } from "../interface/User.interface";
import api from "./api";

export async function load(id: number): Promise<User> {
  try {
    const result = await api.get(`/user/${id}`, {
    })
    return result.data
  } catch(error) {
    console.log(error);
    return null
  }
}