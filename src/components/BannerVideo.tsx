import { Box, Image, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';

const width = Dimensions.get('screen').width;

export default function BannerVideo({image, title, speaker}) {
  return (
    <Box mb={10}>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        mb={3}
      >
        <Image
          source={{
            uri: `https://img.youtube.com/vi/${image}/0.jpg`
          }} 
          alt={title}
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
          {title}
        </Text>
        <Text
          fontSize={"sm"}
          lineHeight={"sm"}
          color={"white"}
        >
          {speaker}
        </Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 100,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  }
});