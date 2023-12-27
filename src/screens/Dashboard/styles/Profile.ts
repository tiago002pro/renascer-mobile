import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.sizes.paddingPages,
    backgroundColor: THEME.colors.backgroud,
    display: 'flex',
  },
  profile: {
    width: '100%',
    padding: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: THEME.colors.header,
    borderRadius: 5,
    marginBottom: THEME.sizes.paddingPages * 2
  },
  imageArea: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: THEME.colors.yellow[400],
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  textArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#FFF',
    fontWeight:'500',
    fontSize: THEME.fontSizes.lg,
  },
  email: {
    color: THEME.colors.yellow[400],
    fontSize: THEME.fontSizes.sm,
  },
  footer: {
    marginBottom: '5%',
  },
})