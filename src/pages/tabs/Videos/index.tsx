import { StyleSheet, Text } from "react-native";
import { Box, Button, ScrollView, VStack } from "native-base";
import { THEME } from "../../../styles/theme";
import { useEffect, useState } from "react";
import { getAll } from "../../../services/SermonService";
import CarouselVideo from "../../../components/CarouselVideo";
import SlideVideo from "../../../components/SlideVideo";
import { useNavigation } from "@react-navigation/native";

const slide1 = [
  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/Bound_FEATURED-1.webp?alt=media&token=ead8b850-05b3-4288-8640-dbda783ee6b4',
  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/Born%20Again.jpg?alt=media&token=cdbc809e-4cb9-4602-bdb3-4843a96da2c4',
  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-1.jpg?alt=media&token=2235eb59-51f5-481a-bf41-8a2f8f5104f9',
  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-40.jpg?alt=media&token=9e279ccb-38ff-4570-9c3b-f58548a3e9ef',
]

const slide2 = [
  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/Can%C3%A7%C3%A3o%20de%20sime%C3%A3o.jpg?alt=media&token=13592b0f-55c5-4ec2-aa8e-559c032ee08a',
  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/a.webp?alt=media&token=3ee57308-ddd5-4c51-afcd-4ee0abdc79c9',
  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-5.jpg?alt=media&token=778d6bd0-3b51-4ea3-8d2f-252d202d5c35',
  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-2.jpg?alt=media&token=b656fbc2-be7e-4278-b180-1ac3a71a1a57',
]


const video = {
  id: '1',
  videoId: '4p8frDNJng0',
  title: 'DEVANEIO 03 - Confissão',
  speaker: 'Marco Telles',
  description: 'DEVANEIO é o disco 2 do álbum "O Precioso Evangelho de Cristo". No qual tratamos exclusivamente da doutrina do pecado e seus efeitos. Ouça a parte um do projeto (Prelúdios de Eternidade, dedicada exclusivamente à doutrina de Deus) e também a parte dois (DEVANEIO) bem como a parte três (Sublime Bem, dedicada à Cristologia) em todas as plataformas digitais e Streaming.',
}


export default function Videos() {
  const [sermons, setSermon] = useState('') as any[]

  useEffect(() => {
    async function getAllSermons() {
      const result = await getAll()
      setSermon(result)
    }
    getAllSermons()
  }, [])

  const navigation: any = useNavigation()

  function goWathVideo() {
    navigation.navigate('StackRoutes', {
      screen: 'WatchVideo', 
      params: {
        video: video
      }
    });
  }

  return (
    <VStack style={styles.container} safeArea>
      <ScrollView>
        <Box style={styles.carousel}>
          <Text style={styles.title}>Em destaque</Text>
          <CarouselVideo data={sermons}/>
        </Box>
        <Button onPress={goWathVideo}>Teste</Button>
        <Box style={styles.slide}>
          <SlideVideo title={"Mais populares"} data={slide1}/>
        </Box>
        <Box style={styles.slide}>
          <SlideVideo title={"Adicionados recentemente"} data={slide2}/>
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