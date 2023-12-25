import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../../styles/theme";

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.45;
const imageH = imageW * .54;

export const styles = StyleSheet.create({
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