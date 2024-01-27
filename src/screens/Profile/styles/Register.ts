import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.sizes.paddingPages * 2,
    backgroundColor: THEME.colors.backgroudLight,
  },
  footerArea: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center'
  },
  footerBtn: {
    backgroundColor: 'transparent',
    left: 5
  },
})