import { Box, FlatList, Image, Text, View } from "native-base";
import { StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { THEME } from "../styles/theme";
import { Video } from "../pages/WatchVideo/video";

const { width, height } = Dimensions.get('screen');

const imageW = width * 0.45;
const imageH = imageW * .54;

export default function SlideVideo({title, data}) {
  const navigation: any = useNavigation()
  
  async function goWathVideo(video: Video): Promise<void> {
    navigation.navigate('StackRoutes', {
      screen: 'WatchVideo', 
      params: {
        video: video
      }
    });
  }

  return (
    <View style={styles.container}>
      <Box style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </Box>
      <Box style={styles.slideContainer}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}: any) => {
            return <TouchableWithoutFeedback onPress={() => goWathVideo(item)}>
              <View style={styles.imageContainer}>
                <Image source={{uri: item.coverImage}} alt={item.coverImage} style={styles.image} />
              </View>
            </TouchableWithoutFeedback>
          }}
        />
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: THEME.fontSizes.md,
    fontWeight: 'bold',
    color: "#FFF",
  },
  slideContainer: {
  },
  imageContainer: {
    width: imageW,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: imageW - 10,
    height: imageH,
    borderRadius: 5,
    backgroundColor: '#000'
  }
});
