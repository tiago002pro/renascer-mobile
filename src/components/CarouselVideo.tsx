import { Box, Image, Text } from "native-base";
import { StyleSheet, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get('window').width
const SLIDER_HEIGHT = (Dimensions.get('window').height) / 3
const ITEM_WIDTH = SLIDER_WIDTH * 0.88
const ITEM_HEIGHT = SLIDER_HEIGHT * 0.60


type Props = {
  item: {
    img: string,
    title: string,
    speaker: string,
  }
  index: number
}

export default function CarouselVideo({data}) {
  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={data}
        renderItem={carouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={SLIDER_HEIGHT}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        useScrollView={true}
      />
    </View>
  )
}

function carouselCardItem({item, index}: Props) {
  return (
    <View style={styles.cardCarousel} key={index}>
      <Image style={styles.imageCardCarousel} alt={item.title} source={{uri: item.img}}/>
      <Box style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.speaker}</Text>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardCarousel: {
    width: ITEM_WIDTH,
  },
  imageCardCarousel: {
    height: ITEM_HEIGHT,
    backgroundColor: '#1a1a1a',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    resizeMode: 'cover',
  },
  description: {
    padding: 10,
    backgroundColor: '#1a1a1a',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 15,
    color: '#FFF',
  },
});