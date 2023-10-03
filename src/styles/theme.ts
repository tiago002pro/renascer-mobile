import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99',
      700: '#626262'
    },
    orange: {
      700: "#F0A500",
    },
    blue: {
      200: '#5f6477de',
      300: '#5f6477'
    },
    while: "#fff",
    black: "#000",
    backgroud: "#f4f5f7",
    backgroudVideo: "#1a1a1a",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  }
});