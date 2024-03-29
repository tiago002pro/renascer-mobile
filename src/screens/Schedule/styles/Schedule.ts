import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    padding: THEME.sizes.paddingPages,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.white,
    marginBottom: 20,
  }
})