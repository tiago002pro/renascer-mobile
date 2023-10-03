import { Box, Image, Text } from "native-base";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';

const width = Dimensions.get('screen').width;

export default function BannerVideo({navigation, video}) {
  return (
    <TouchableOpacity onPress={ () => navigation.navigate("WatchVideo",{ video: video}) }>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        mb={3}
      >
        <Image
          source={{
            uri: `https://img.youtube.com/vi/${video.urlImg}/0.jpg`
          }} 
          alt={video.id}
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
          {video.title}
        </Text>
        <Text
          fontSize={"sm"}
          lineHeight={"sm"}
          color={"white"}
        >
          {video.speaker}
        </Text>
      </Box>
    </TouchableOpacity>
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