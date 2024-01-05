import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.sizes.paddingPages,
    backgroundColor: THEME.colors.backgroud,
  },
  areaName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputArea: {
    marginBottom: 10,
  },
  label: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.sm,
    marginBottom: 2,
  },
})