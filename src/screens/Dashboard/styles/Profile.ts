import { StyleSheet } from "react-native";

import { THEME } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: THEME.colors.white,
    display: 'flex',
    justifyContent: 'space-between'
  },
  profile: {
    width: '100%',
    padding: '10%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: THEME.colors.orange[400],
    borderRadius: 5,
    shadowOffset: {width: -2, height: 5},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
  },
  imageArea: {
    padding: '1%',
    borderRadius: 100,
    marginBottom: 30,
    backgroundColor: '#fff'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: '500',
    color: 'white',
  },
  text: {
    fontSize: THEME.fontSizes.sm,
  },
  data: {
    marginTop: 30,
  },
  info: {
    backgroundColor: THEME.colors.gray[200],
    borderRadius: 5,
  },
  infoArea: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconArea: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%'
  },
  icon: {
    fontSize: 30
  },
  description: {
    justifyContent: 'center',
  },
  footer: {
    marginBottom: '5%',
  },
})