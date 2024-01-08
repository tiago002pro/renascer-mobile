import React, { useEffect, useState } from "react";
import { Box, ScrollView, Text, VStack, View } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';

import VideoService from "../service/VideoService";

import { SlideVideoComponent } from "../components/SlideVideo";

import { THEME } from "../../../styles/theme";
import { styles } from '../styles/Videos';

export function Videos() {
  const [sermon, setSermon] = useState('') as any[]
  const [music, setMusic] = useState('') as any[]
  const [podcast, setPodcast] = useState('') as any[]

  useEffect(() => {
    async function getAllSermon() {
      const result = await VideoService.getAllByCategory('SERMON')
      setSermon(result)
    }

    async function getAllMusic() {
      const result = await VideoService.getAllByCategory('MUSIC')
      setMusic(result)
    }

    async function getAllPodcast() {
      const result = await VideoService.getAllByCategory('PODCAST')
      setPodcast(result)
    }
    
    getAllSermon()
    getAllMusic()
    getAllPodcast()
  }, [])

  return (
    <VStack style={styles.container} safeArea>
      <ScrollView>
        {sermon && sermon.length > 0 ?
          <Box style={styles.slide}>
            <SlideVideoComponent title={"Palavras"} data={sermon}/>
          </Box>
          : null
        }
        
        {music && music.length > 0 ?
          <Box style={styles.slide}>
            <SlideVideoComponent title={"Músicas"} data={music}/>
          </Box>
          : null
        }

        {podcast && podcast.length > 0 ?
          <Box style={styles.slide}>
            <SlideVideoComponent title={"Podcasts"} data={podcast}/>
          </Box>
          : null
        }

        <View alignItems={'center'} justifyContent={'center'} mt={'50%'} >
          <Box mb={3}>
            <FontAwesome5 name="video-slash" color={THEME.colors.yellow[400]} size={50}/>
          </Box>
          <Text color={'white'} fontSize={"lg"} textAlign={'center'}>Nenhum vídeo</Text>
          <Text color={'white'} fontSize={"lg"} textAlign={'center'}>foi encontrado</Text>
        </View>
      </ScrollView>
    </VStack>
  );
}