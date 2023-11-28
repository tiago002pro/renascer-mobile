import React from "react";
import { Box, Text } from "native-base";
import { StyleSheet, View, Dimensions, Platform } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel-v4";
import { THEME } from "../styles/theme";
import { MaterialIcons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window')
const SLIDER_WIDTH = Dimensions.get('window').width
const SLIDER_HEIGHT = (Dimensions.get('window').height) / 3
const ITEM_WIDTH = SLIDER_WIDTH * 0.70
const ITEM_DESCRIPTION_HEIGHT = SLIDER_HEIGHT * 0.25

type Props = {
  data: {
    date: string,
    description: string,
    id: number,
    img: string,
    speaker: string,
    title: string,
    url: string,
  },
}

export default function CarouselVideo({data}: any) {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout={'default'}
        data={data}
        renderItem={__carouselCardItem}
        sliderWidth={screenWidth}
        sliderHeight={SLIDER_HEIGHT}
        itemWidth={screenWidth - 60}
        useScrollView={true}
        hasParallaxImages={true}
      />
    </View>
  )
}

function __carouselCardItem({item}: any, parallaxProps) {
  return (
    <View style={styles.carouselItemContainer} key={item.id}>
      <ParallaxImage
        source={{uri: item.img}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        {...parallaxProps}
      />
      <Box style={styles.playIcon}>
        <MaterialIcons name="play-circle-filled" color={"#FFF"} size={screenWidth * .2} />
      </Box>
      <Box style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.subtitle}>{item.speaker}</Text> */}
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItemContainer: {
    width: screenWidth - 60,
    height: screenWidth - 100,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  playIcon: {
    position: 'absolute',
    width: screenWidth - 60,
    height: (screenWidth - 100) - ITEM_DESCRIPTION_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .7,
  },
  description: {
    height: ITEM_DESCRIPTION_HEIGHT,
    padding: 10,
    backgroundColor:  THEME.colors.gray[800],
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 10,
    color: '#FFF',
  },
});