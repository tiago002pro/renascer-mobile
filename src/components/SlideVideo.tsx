import { Box, Image, Text, View } from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { THEME } from "../styles/theme";

const { width, height } = Dimensions.get('screen');

const imageW = width * 0.45;
const imageH = imageW * .54;

export default function SlideVideo({title, data}) {
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
          renderItem={({item}) => {
            return <View style={styles.imageContainer}>
              <Image source={{uri: item}} alt={item} style={styles.image} />
            </View>
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
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
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
  }
});