import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import { THEME } from "../../styles/theme";

const { width, height } = Dimensions.get('screen');
export const VIDEO_WIDTH = width;
export const VIDEO_HEIGHT = height * .27;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
  },
  player: {
    width: width,
    height: VIDEO_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionPlayer: {
    width: width,
    padding: '5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: THEME.fontSizes.lg,
    color: THEME.colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  speaker: {
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.white,
    marginBottom: 10,
  },
  description: {
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.white,
    marginBottom: 10,
    textAlign: 'justify'
  }
})