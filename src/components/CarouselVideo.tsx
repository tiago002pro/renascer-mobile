import React, { useState } from "react";
import { Box, Text } from "native-base";
import { StyleSheet, View, Dimensions } from "react-native";
import Carousel, { Pagination, ParallaxImage } from "react-native-snap-carousel-v4";
import { THEME } from "../styles/theme";
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

const imageW = width * .9;
const imageH = imageW * .55;
const descriptionH = imageH * .3;

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
  const [ activeSlide, setActiveSlide ] = useState();

  function setState(index) {
    setActiveSlide(index.activeSlide)
  }

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout={'stack'}
        layoutCardOffset={`18`}
        data={data}
        renderItem={__carouselCardItem}
        sliderWidth={width}
        sliderHeight={height}
        itemWidth={imageW}
        useScrollView={true}
        hasParallaxImages={true}
        onSnapToItem={(index) => setState({ activeSlide: index }) }
      />
      <MyPagination data={data} activeSlide={activeSlide}/>
    </View>
  )
}

function __carouselCardItem({item}: any, parallaxProps) {
  return (
    <View style={styles.carouselItemContainer} key={item.id}>
      <Box style={styles.imageContainer}>
        <ParallaxImage
          source={{uri: item.img}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps}
        />
      </Box>

      <Box style={styles.descriptionContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.speaker}</Text>
      </Box>

      <Box style={styles.playIcon}>
        <MaterialIcons name="play-circle-filled" color={"#FFF"} size={width * .2} />
      </Box>
    </View>
  )
}

function MyPagination({data, activeSlide}) {
  return (
    <Pagination
      dotsLength={data ? data.length : 0}
      activeDotIndex={activeSlide}
      containerStyle={{
        width: width,
      }}
      dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: imageW / 50,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
      }}
      inactiveDotStyle={{
        // Define styles for inactive dots here
      }}
      inactiveDotOpacity={0.1}
      activeOpacity={1}
      inactiveDotScale={1}
    />
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: width,
  },
  carouselItemContainer: {
    width: imageW - 10,
    height: imageH + descriptionH 
  },
  imageContainer: {
    width: imageW,
    height: imageH,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    backgroundColor: '#000'
  },
  image: {
    width: imageW - 20,
    height: imageH,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  descriptionContainer: {
    width: imageW,
    height: descriptionH,
    paddingLeft: 5,
    paddingRight: 5,
    bottom: 0,
    position: 'absolute',
    backgroundColor:  THEME.colors.gray[800],
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    display: 'flex',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
    paddingTop: 5,
  },
  subtitle: {
    fontSize: 10,
    color: '#FFF',
  },
  playIcon: {
    position: 'absolute',
    width: imageW,
    height: height * .25,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .7,
  },
});