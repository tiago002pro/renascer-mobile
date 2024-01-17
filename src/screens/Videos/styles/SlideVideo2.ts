import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../../styles/theme";

const { width } = Dimensions.get('screen');
const imageW = width * 0.45;
const imageH = imageW * .54;

export const styles = StyleSheet.create({
  container: {
  },
  titleContainer: {
    marginBottom: 2,
  },
  title: {
    fontSize: THEME.fontSizes.sm,
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
});