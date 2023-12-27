import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
    padding: THEME.sizes.paddingPages
  },
  accordion: {
    width: '100%',
    backgroundColor: THEME.colors.header,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: THEME.sizes.paddingPages,
    borderRadius: 10,
  },
  area: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconArea: {
    marginRight: 20,
  },
  infoArea: {
  },
  title: {
    fontSize: THEME.fontSizes.md,
    fontWeight: 'bold',
    color: THEME.colors.white,
    marginBottom: THEME.sizes.paddingPages *2
  },
  arrowArea: {},
  arrowIcon: {
    color: THEME.colors.white,
  },
})