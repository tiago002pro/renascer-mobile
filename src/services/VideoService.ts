import api from "./api";

export async function getAllVideos(): Promise<any[]> {
  try {
    const result = await api.get(`/api/video/all`)
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}

export async function getAllByCategory(category: string): Promise<any[]> {
  return [
    {
      id: 1,
      videoId: 'W71AlD2K-Cc&t=1s',
      title: 'HISTÓRIA DE VIDA NÍVEA SOARES',
      author: 'DOUGLAS GONÇALVES NO PODCAST JESUSCOPY #155',
      description: 'Nivea Soares no podcast Jesuscopy com Douglas Gonçalves falando sobre experiências com Cristo e o que Deus tem para a igreja nos dias de hoje...',
      date:null,
      coverImage: 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/HIST%C3%93RIA%20DE%20VIDA%20N%C3%8DVEA%20SOARES.jpg?alt=media&token=4dabc360-b83a-4b10-b811-c1dcbd75d9ca'
    },
  ]
  try {
    const result = await api.get(`/api/video/all-by-category/${category}`)
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}