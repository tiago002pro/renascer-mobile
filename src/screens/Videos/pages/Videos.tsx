import React, { useEffect, useState } from "react";
import { Box, ScrollView, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { styles } from '../styles/Videos';
import { SlideVideoComponent } from "../components/SlideVideo";
import { getAllByCategory } from "../../../services/VideoService";

// type video = {
//   id?: number;
//   videoId?: string; 
//   title?: string;
//   author?: string;
//   description?: string;
//   date?: Date;
//   coverImage?: string;
// }

export function Videos() {
  const navigation: any = useNavigation()
  const [sermon, setSermon] = useState('') as any[]
  const [music, setMusic] = useState('') as any[]
  const [podcast, setPodcast] = useState('') as any[]

  // React.useLayoutEffect(() => {
  //   navigation.getParent().setOptions({ title: 'Palavras' })
  // })


  useEffect(() => {
    async function getAllSermon() {
      const result = await getAllByCategory('SERMON')
      setSermon(result)
    }

    // async function getAllMusic() {
    //   const result = await getAllByCategory('MUSIC')
    //   setMusic(result)
    // }

    // async function getAllPodcast() {
    //   const result = await getAllByCategory('PODCAST')
    //   setPodcast(result)
    // }
    
    getAllSermon()
    // getAllMusic()
    // getAllPodcast()
  }, [])

  return (
    <VStack style={styles.container} safeArea>
      <ScrollView>
        <Box style={styles.slide}>
          <SlideVideoComponent title={"Palavras"} data={sermon}/>
        </Box>
        {/* <Box style={styles.slide}>
          <SlideVideoComponent title={"Músicas"} data={music}/>
        </Box>
        <Box style={styles.slide}>
          <SlideVideoComponent title={"Podcasts"} data={podcast}/>
        </Box> */}
      </ScrollView>
    </VStack>
  );
}