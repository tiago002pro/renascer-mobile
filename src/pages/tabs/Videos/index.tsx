import { StyleSheet, Text } from "react-native";
import { Box, ScrollView, VStack } from "native-base";
import { THEME } from "../../../styles/theme";
import { useEffect, useState } from "react";
import { getAllByCategory, getAllVideos } from "../../../services/VideoService";
import CarouselVideo from "../../../components/CarouselVideo";
import SlideVideo from "../../../components/SlideVideo";
import { Video } from "../../WatchVideo/video";

export default function Videos() {
  const [videos, setVideo] = useState('') as Video[]
  const [music, setMusic] = useState('') as any[]
  const [podcast, setPodcast] = useState('') as any[]

  useEffect(() => {
    async function getAllSermons() {
      const result = await getAllVideos()
      setVideo(result)
    }
    getAllSermons()
  }, [])

  useEffect(() => {
    async function getAllMusic() {
      const result = await getAllByCategory('MUSIC')
      setMusic(result)
    }

    async function getAllPodcast() {
      const result = await getAllByCategory('PODCAST')
      setPodcast(result)
    }
    
    getAllMusic()
    getAllPodcast()
  }, [])

  return (
    <VStack style={styles.container} safeArea>
      <ScrollView>
        {/* <Box style={styles.carousel}>
          <Text style={styles.title}>Em destaque</Text>
          <CarouselVideo data={videos}/>
        </Box> */}
        <Box style={styles.slide}>
          <SlideVideo title={"Músicas"} data={music}/>
        </Box>
        <Box style={styles.slide}>
          <SlideVideo title={"Podcast"} data={podcast}/>
        </Box>
      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    padding: THEME.sizes.paddingPages,
  },
  carousel: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  title: {
    marginBottom: 10,
    marginLeft: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.white,
  },
  slide: {
    marginBottom: '5%'
  }
});