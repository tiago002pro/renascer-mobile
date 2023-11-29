import { Box, Image, Text } from "native-base";
import { StyleSheet, Dimensions } from 'react-native';
import { THEME } from "../../../../../styles/theme";

const { width: screenWidth } = Dimensions.get('window');

export default function Schedule({item}) {
  return (
    <Box style={styles.container}>
      <Box style={styles.imageContainer}>
        <Image
          source={{uri: item.image}}
          alt={item.id}
          style={styles.image}
        />
      </Box>

      <Box style={styles.description}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageContainer: {
    width: screenWidth * .35,
    height: screenWidth * .20,
    marginRight: 10,
  },
  image: {
    width: screenWidth * .35,
    height: screenWidth * .20,
    borderRadius: 5,
  },
  description: {
    width: screenWidth * .65,
    height: screenWidth * .20,
    padding: 0,
    margin: 0
  },
  time: {
    color:  THEME.colors.yellow[400],
    fontSize: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  }
});