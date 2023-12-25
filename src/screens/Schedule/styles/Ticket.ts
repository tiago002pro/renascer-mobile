import { Dimensions, StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

const { width, height } = Dimensions.get('screen');
const withDescription = (width - THEME.sizes.paddingPages * 2);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
  },
  data: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width,
    height: (height * .27),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: THEME.sizes.paddingPages * 2,
  },
  description: {
    width: withDescription,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: THEME.fontSizes.lg,
    lineHeight: THEME.fontSizes.lg,
    color: THEME.colors.white,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: THEME.fontSizes.sm,
    lineHeight: THEME.fontSizes.sm,
    color: THEME.colors.white,
  },
  date: {
    fontSize: THEME.fontSizes.sm,
    lineHeight: THEME.fontSizes.sm,
    color: THEME.colors.white,
    marginTop: 5,
  },
  information: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    width: withDescription * .09,
  },
  info: {
    width: (withDescription - (withDescription * .13)),
  },
  boxLine: {
    width: withDescription,
    display: 'flex',
    marginBottom: 20,
  },
  line: {
    width: (withDescription - (withDescription * .13)),
    height: 1,
    left: withDescription * .09,
    backgroundColor: THEME.colors.gray[700]
  },
  footer: {
    width: withDescription,
    marginBottom: THEME.sizes.paddingPages,
  }
})