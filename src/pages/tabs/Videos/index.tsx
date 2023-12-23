import React, { useEffect, useState } from "react";
import { Box, ScrollView, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import SlideVideo from "../../../components/SlideVideo";
import { styles } from './styles';

import { getAllByCategory } from "../../../services/VideoService";

export default function Videos() {
  const navigation: any = useNavigation()
  const [sermon, setSermon] = useState('') as any[]
  const [music, setMusic] = useState('') as any[]
  const [podcast, setPodcast] = useState('') as any[]

  React.useLayoutEffect(() => {
    navigation.getParent().setOptions({ title: 'Palavras' })
  })

  useEffect(() => {
    async function getAllSermon() {
      const result = await getAllByCategory('SERMON')
      setSermon(result)
    }

    async function getAllMusic() {
      const result = await getAllByCategory('MUSIC')
      setMusic(result)
    }

    async function getAllPodcast() {
      const result = await getAllByCategory('PODCAST')
      setPodcast(result)
    }
    
    getAllSermon()
    getAllMusic()
    getAllPodcast()
  }, [])

  return (
    <VStack style={styles.container} safeArea>
      <ScrollView>
        <Box style={styles.slide}>
          <SlideVideo title={"Palavras"} data={sermon}/>
        </Box>
        <Box style={styles.slide}>
          <SlideVideo title={"Músicas"} data={music}/>
        </Box>
        <Box style={styles.slide}>
          <SlideVideo title={"Podcasts"} data={podcast}/>
        </Box>
      </ScrollView>
    </VStack>
  );
}