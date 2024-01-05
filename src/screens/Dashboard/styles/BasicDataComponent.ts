import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  item: {
    display: 'flex',
    marginBottom: 10
  },
  label: {
    fontSize: THEME.fontSizes.sm,
    color: THEME.colors.yellow[400],
    fontWeight: 'bold',
  },
  value: {
    fontSize: THEME.fontSizes.sm,
    color: '#FFF',
  }
})