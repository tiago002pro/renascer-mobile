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
    marginBottom: THEME.sizes.paddingPages,
  },
  imageArea: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: THEME.colors.yellow[400],
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 110,
  },
  iconImage: {
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
  accordion: {
    width: '100%',
    backgroundColor: THEME.colors.header,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: THEME.sizes.paddingPages,
    borderRadius: 10,
  },
  area: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
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
  editBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  iconDditBtn: {
    backgroundColor: THEME.colors.yellow[400],
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  component: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
})