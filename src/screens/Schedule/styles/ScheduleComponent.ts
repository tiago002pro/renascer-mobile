import { Dimensions, StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
    margin: 0,
    display: 'flex',
  },
  date: {
    color:  THEME.colors.yellow[400],
    fontSize: 10,
    textTransform: 'uppercase',
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  data: {
    width: screenWidth * .65,
    height: ((screenWidth * .20) - 30),
  },
  registrationArea: {
    width: screenWidth * .65,
  },
  registration: {
    width: screenWidth * .30,
    alignItems: 'center',
    backgroundColor: THEME.colors.yellow[400],
    padding: 5,
    borderRadius: 10,
  },
  registrationText: {
    fontSize: THEME.fontSizes.sm - 2,
    lineHeight: THEME.fontSizes.sm - 2,
    color: THEME.colors.backgroud,
  }
})