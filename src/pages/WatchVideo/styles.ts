import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import { THEME } from "../../styles/theme";

const { width, height } = Dimensions.get('screen');
export const VIDEO_WIDTH = width;
export const VIDEO_HEIGHT = height * .3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.colors.white,
  },
  player: {
    width: width,
    height: VIDEO_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  }
})