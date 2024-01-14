import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.sizes.paddingPages,
    backgroundColor: THEME.colors.backgroud,
  },
  option: {
    width: '100%',
    backgroundColor: THEME.colors.header,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: THEME.sizes.paddingPages,
    borderRadius: 10,
    padding: 15,
  },
  label: {
    fontSize: THEME.fontSizes.md,
    fontWeight: '500',
    color: THEME.colors.white,
  },
})