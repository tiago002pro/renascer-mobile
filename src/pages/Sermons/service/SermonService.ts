import api from "../../../services/api";
import { Sermon } from "../interface/Sermon.interface";

export async function getAll(): Promise<Sermon[]> {
  try {
    const result = await api.get(`/api/sermon/all`)
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}