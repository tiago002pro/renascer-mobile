import { Box, Image, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';

import image from "./../assets/teste.jpg";
const width = Dimensions.get('screen').width;

export default function BannerVideo() {
  return (
    <Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        mb={3}
      >
        <Image
          source={image} 
          alt="teste"
          w={"100%"}
          h={378/768*width}
          borderRadius={5}
        />
        <MaterialIcons 
          name="play-circle-filled"
          color={"white"}
          style={styles.icon}
        />
      </Box>
      <Box>
        <Text 
          fontSize={"lg"}
          lineHeight={"lg"}
          color={"white"}
          fontWeight={"bold"}
        >
          How Did I Get Here?
        </Text>
        <Text
          fontSize={"sm"}
          lineHeight={"sm"}
          color={"white"}
        >
          Travis Greene
        </Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 80,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  }
});