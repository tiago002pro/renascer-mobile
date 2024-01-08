import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
    padding: THEME.sizes.paddingPages
  },
  Touchable: {
    width: '100%',
  },
  options: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.colors.header,
    marginBottom: THEME.sizes.paddingPages,
    borderRadius: 10,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: THEME.colors.yellow[400],
    marginRight: 10,
  },
  title: {
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.white,
  },
  arrow: {},
  arrowIcon: {
    color: THEME.colors.yellow[400],
  }
});