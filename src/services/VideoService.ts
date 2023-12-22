import api from "./api";
import { Video } from "../pages/WatchVideo/video";

export async function getAllVideos(): Promise<Video[]> {
  try {
    const result = await api.get(`/api/video/all`)
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}

export async function getAllByCategory(category: string): Promise<Video[]> {
  try {
    const result = await api.get(`/api/video/all-by-category/${category}`)
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}