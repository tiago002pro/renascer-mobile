import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.sizes.paddingPages,
    backgroundColor: THEME.colors.backgroud,
  },
  profile: {
    width: '100%',
    padding: 40,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: THEME.colors.backgroud,
    borderRadius: 5,
    marginBottom: 10,
  },
  imageArea: {
    width: 130,
    height: 130,
    borderRadius: 130,
    // backgroundColor: THEME.colors.yellow[300],
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 130,
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
    fontSize: THEME.fontSizes.lg + 10,
    lineHeight: THEME.fontSizes.lg + 10,
    marginBottom: 20,
  },
  email: {
    color: THEME.colors.yellow[200],
    fontSize: THEME.fontSizes.sm,
    lineHeight: THEME.fontSizes.sm,
    fontWeight: '500'
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
    justifyContent: 'space-between',
    padding: 20,
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconArea: {
    marginRight: 10,
  },
  infoArea: {
  },
  title: {
    fontSize: THEME.fontSizes.md,
    fontWeight: '500',
    color: THEME.colors.white,
  },
  arrowArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
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