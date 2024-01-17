import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    padding: THEME.sizes.paddingPages,
  },
  carousel: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  title: {
    marginBottom: 10,
    marginLeft: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.white,
  },
  slide: {
    marginBottom: 30
  }
});