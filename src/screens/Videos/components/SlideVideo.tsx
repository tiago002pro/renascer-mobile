import { TouchableWithoutFeedback } from "react-native";
import { Box, FlatList, Image, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/SlideVideo";
import { Video } from "../interface/Video";

export function SlideVideoComponent({title, data}) {
  const navigation: any = useNavigation()

  async function goWathVideo(video: any): Promise<void> {
    navigation.navigate('WatchVideo', {
      video: video
    });
  }
  
  return (
    <View style={styles.container} key={title}>
      <Box style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </Box>
      <Box style={styles.slideContainer}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: Video) => item.id.toString()}
          renderItem={({item}: any) => {
            return <TouchableWithoutFeedback onPress={() => goWathVideo(item)}>
              <View style={styles.imageContainer}>
                <Image source={{uri: item.coverImage}} alt={item.coverImage} style={styles.image} key={item.id.toString()} />
              </View>
            </TouchableWithoutFeedback>
          }}
        />
      </Box>
    </View>
  );
}