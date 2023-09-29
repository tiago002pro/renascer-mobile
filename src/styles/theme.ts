import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    orange: {
      700: "#F0A500",
    },
    while: "#fff",
    black: "#000",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  }
});