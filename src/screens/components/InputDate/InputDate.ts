import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: THEME.colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10
  },
  label: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.md,
  },
  btn: {
    backgroundColor: THEME.colors.yellow[400],
  }
})