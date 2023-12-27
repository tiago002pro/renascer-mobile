import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
    padding: THEME.sizes.paddingPages
  },
  profile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: THEME.colors.header,
    marginBottom: THEME.sizes.paddingPages,
    borderRadius: 10,
  },
  content: {
    padding: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageArea: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: THEME.colors.yellow[400],
    marginRight: 10,
  },
  imageUser: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  textArea: {

  },
  name: {
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.white,
    fontWeight: '500',
  },
  lineContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  line: {
    borderColor: '#FFF',
    borderTopWidth: 1,
  },
  profileFooter: {
    padding: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconFooter: {
    color: THEME.colors.yellow[400],
    marginRight: 5,
  },
  textFooter: {
    fontSize: THEME.fontSizes.sm,
    color: THEME.colors.yellow[400],
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