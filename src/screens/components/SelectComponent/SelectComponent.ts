import { StyleSheet } from "react-native";
import { THEME } from "../../../styles/theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
  }
})