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
  // return [
  //   {
  //     id: 1,
  //     videoId: 'YW1ac3JUMpM',
  //     title: 'LUCA MARTINI (segunda participação)',
  //     author: 'Douglas Gonçalves no Podcast JesusCopy #163',
  //     description: 'Luca Martini no podcast JesusCopy, trazendo suas experiências e ensinamentos com missões pelo mundo. Como levar a palavra de Deus de uma forma criativa e dinâmica no Brasil e no mundo.',
  //     date:null,
  //     coverImage: 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/LUCA%20MARTINI.jpg?alt=media&token=2d7f085e-f4e6-47b7-9f33-13e845db7c96'
  //   },
  // ]
  try {
    const result = await api.get(`/auth/all-videos-by-category/${category}`)
    return result.data
  } catch(error) {
    console.log("error", error);
    return null
  }
}