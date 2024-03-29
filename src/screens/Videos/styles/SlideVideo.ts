import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../../styles/theme";

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.80;
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
  videoContainer: {
    width: imageW,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: imageW - 10,
    height: imageH,
    borderRadius: 2,
    backgroundColor: '#000',
  },
  description: {
    width: imageW - 10,
  }
});