import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.sizes.paddingPages * 2,
    backgroundColor: THEME.colors.backgroudLight
  },
  containerLogo: {
    height: 200,
    marginBottom: 20,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
  },
  footerArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerBtn: {
    backgroundColor: 'transparent',
    left: 5
  },
})