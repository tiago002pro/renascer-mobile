import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { User } from "../interface/User.interface";

export async function loadUser(id: number): Promise<User> {
  const token = await AsyncStorage.getItem('token')
  console.log("loadUser -> token: ", token);

  const api = axios.create({
    baseURL: "http://172.29.240.1:8080",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${token}`
    }
})
  try {
    const result = await api.get(`/user/${id}`)
    console.log("loadUser result", result);
    
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}