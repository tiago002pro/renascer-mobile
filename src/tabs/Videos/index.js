import { Box, Image, ScrollView, Text } from "native-base";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';



import image from './../../assets/teste.jpg'

const width = Dimensions.get('screen').width;


export default function Videos() {
  return (
    <ScrollView style={styles.container}>
      <Box style={styles.areaBannerVideo} safeArea>

        <Box style={styles.bannerVideo}>
          <Box style={{justifyContent: "center", alignItems: "center"}}>
            <Image source={image} alt="teste" style={{width: "100%", height: (378 / 768 * width), marginBottom: 10, borderRadius: 5}}/>
            <MaterialIcons name="play-circle-filled" size="70%" color={"white"} style={styles.icon}/>
          </Box>
          <Box style={styles.description}>
            <Text fontSize={"lg"}>How Did I Get Here?</Text>
            <Text fontSize={"sm"}>Travis Greene</Text>
          </Box>
        </Box>
        <Box style={styles.bannerVideo}>
          <Box style={{justifyContent: "center", alignItems: "center"}}>
            <Image source={image} alt="teste" style={{width: "100%", height: (378 / 768 * width), marginBottom: 10, borderRadius: 5}}/>
            <MaterialIcons name="play-circle-filled" size="70%" color={"white"} style={styles.icon}/>
          </Box>
          <Box style={styles.description}>
            <Text fontSize={"lg"}>How Did I Get Here?</Text>
            <Text fontSize={"sm"}>Travis Greene</Text>
          </Box>
        </Box>
        <Box style={styles.bannerVideo}>
          <Box style={{justifyContent: "center", alignItems: "center"}}>
            <Image source={image} alt="teste" style={{width: "100%", height: (378 / 768 * width), marginBottom: 10, borderRadius: 5}}/>
            <MaterialIcons name="play-circle-filled" size="70%" color={"white"} style={styles.icon}/>
          </Box>
          <Box style={styles.description}>
            <Text fontSize={"lg"}>How Did I Get Here?</Text>
            <Text fontSize={"sm"}>Travis Greene</Text>
          </Box>
        </Box>
        <Box style={styles.bannerVideo}>
          <Box style={{justifyContent: "center", alignItems: "center"}}>
            <Image source={image} alt="teste" style={{width: "100%", height: (378 / 768 * width), marginBottom: 10, borderRadius: 5}}/>
            <MaterialIcons name="play-circle-filled" size="70%" color={"white"} style={styles.icon}/>
          </Box>
          <Box style={styles.description}>
            <Text fontSize={"lg"}>How Did I Get Here?</Text>
            <Text fontSize={"sm"}>Travis Greene</Text>
          </Box>
        </Box>
        <Box style={styles.bannerVideo}>
          <Box style={{justifyContent: "center", alignItems: "center"}}>
            <Image source={image} alt="teste" style={{width: "100%", height: (378 / 768 * width), marginBottom: 10, borderRadius: 5}}/>
            <MaterialIcons name="play-circle-filled" size="70%" color={"white"} style={styles.icon}/>
          </Box>
          <Box style={styles.description}>
            <Text fontSize={"lg"}>How Did I Get Here?</Text>
            <Text fontSize={"sm"}>Travis Greene</Text>
          </Box>
        </Box>

      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
    padding: "5%",
  },
  bannerVideo: {
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    marginBottom: 20
  },
  description: {
    alignItems: "left",
    marginBottom: 10
  },
  title: {
    fontSize: 'lg',
    fontWeight: "bold"
  },
  speaker: {

  },
  icon: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  }
});