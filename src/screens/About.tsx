import { Dimensions, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from 'react-native-reanimated-carousel';

import { THEME } from "../styles/theme";
import { FlatList, Text, View } from "native-base";

const WIDTH = Dimensions.get('window').width

type PropsValue = {
  item: { id: string, title: string, description:string };
  index: number;
}

type PropsCarouselItem = {
  item: { url: string };
  index: number;
}

function value({item, index}: PropsValue) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', }} key={index}>
        <Text style={styles.subtitle} fontWeight={'700'}>{item.title}</Text>
        <Text style={styles.text} marginBottom={30}>{item.description}</Text>
    </View>
  )
}

function carouselItem({item, index}: PropsCarouselItem) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', }} key={index}>
      <Image height={250} resizeMode='cover' source={{ uri: item.url }}/>
    </View>
  )
}

export default function About() {

  const values = [
    {
      id: "1",
      title: "Autoridade bíblica",
      description: "A Bíblia como fonte de autoridade única de doutrina e conduta prática."
    },
    {
      id: "2",
      title: "Santidade",
      description: "A busca da santidade como ideal de vida cristã."
    },
    {
      id: "3",
      title: "Família",
      description: "Família, na perspectiva bíblica, como fundamento da sociedade."
    },
    {
      id: "4",
      title: "Acolhimento",
      description: "Acolhimento gracioso à todas as pessoas."
    },
    {
      id: "5",
      title: "Ética",
      description: "Ética e transparência nas relações com a sociedade."
    },
    {
      id: "6",
      title: "Mordomia",
      description: "Mordomia de tudo que Deus dá ao cristão, para a edificação da igreja e evangelização do mundo."
    }
  ]

  const carouselImages = [
    { url: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-carousel-1.jpg?alt=media&token=a270cf2c-c4ff-46bc-a652-cbaa2bcf7007"},
    { url: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-carousel-2.jpg?alt=media&token=a270cf2c-c4ff-46bc-a652-cbaa2bcf7007"},
    { url: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-carousel-3.jpg?alt=media&token=a270cf2c-c4ff-46bc-a652-cbaa2bcf7007"},
    { url: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-carousel-4.jpg?alt=media&token=a270cf2c-c4ff-46bc-a652-cbaa2bcf7007"},
    { url: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-carousel-5.jpg?alt=media&token=a270cf2c-c4ff-46bc-a652-cbaa2bcf7007"},
    { url: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-carousel-6.jpg?alt=media&token=a270cf2c-c4ff-46bc-a652-cbaa2bcf7007"},
    { url: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-carousel-7.jpg?alt=media&token=a270cf2c-c4ff-46bc-a652-cbaa2bcf7007"},
    { url: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-carousel-8.jpg?alt=media&token=a270cf2c-c4ff-46bc-a652-cbaa2bcf7007"},
  ]

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title} marginBottom={50}>Igreja Renascer, uma igreja, uma família!</Text>
        <Text style={styles.text} marginBottom={30}>Uma família que acolhe todas as pessoas, um espaço pra fortalecer famílias na fé, um lugar para adorar e exaltar a Jesus. A Igreja renascer foi plantada em Maringá no ano de 2003 pelos pastores Marcio e Selma Ribeiro. A Renascer sempre se fundamentou nas escrituras sagradas, na oração e no mover do espirito santo, promovendo transformação através do evangelho.</Text>
        <Text style={styles.text}>Nossa missão é adorar a Deus, proclamar o Evangelho no poder do Espírito Santo, fazer discípulos de Jesus e amar ao próximo. Nossa visão é ser uma igreja fiel às Escrituras Sagradas, relevante à sociedade, que promove a transformação do ser humano e o seu desenvolvimento por meio do evangelho, em conformidade com os valores bíblicos.</Text>
      
        <Carousel
          style={styles.carousel}
          data={(carouselImages)}
          renderItem={carouselItem}
          width={WIDTH - 20}
          height={WIDTH + 50 / 2}
          loop
          autoPlay={true}
          scrollAnimationDuration={1000}
        />

        <Text style={styles.title} marginBottom={30}>Nossos valores</Text>
        <FlatList
          data={values}
          renderItem={value}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  text: {
    fontSize: THEME.fontSizes.md,
    lineHeight: THEME.fontSizes.md + 10,
  },
  subtitle: {
    fontSize: THEME.fontSizes.md,
    lineHeight: THEME.fontSizes.md + 10,
  },
  carousel: {
  
  }
});