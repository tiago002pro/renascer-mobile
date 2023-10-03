import { Box } from "native-base";
import { StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';
import { THEME } from "../styles/theme";

export default function TextInputComponent({ placeholder, icon }) {
  return (
    <Box mb={3}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"black"}
        style={{
          height: 50, 
          fontSize: THEME.fontSizes.md, 
          borderWidth: 1, 
          borderRadius: 30,
          paddingStart: 50,
          fontFamily: "MontserratLight",
          color: THEME.colors.blue[300],
        }}
      >
      </TextInput>
      <MaterialIcons name={icon} color={THEME.colors.blue[300]} style={styles.icon}/>
    </Box>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    lineHeight: 25,
    top: 12.5,
    left: 15,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  }
});