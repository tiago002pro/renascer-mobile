import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99',
      600: '#454545',
      700: '#626262'
    },
    blue: {
      300: '#5f6477',
      400: '#4a5374',
    },
    orangeNew: "#F0A500",
    while: "#fff",
    black: "#000",
    backgroudLight: "#f4f5f7",
    statusBar: '#3c3c3a',
    // header: '#3c3c3a',
    header: '#333335',
    backgroud: '#1b1b1b',
    // backgroud: '#28282c',
    tabBar: '#333335',
    // tabBar: '#3c3c3a',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    paddingPages: 10
  }
});