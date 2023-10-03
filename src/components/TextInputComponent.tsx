import { Box, Icon, Input } from "native-base";
import { StyleSheet } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';
import { THEME } from "../styles/theme";

export default function TextInputComponent({ placeholder, icon }) {
  return (
    <Box mb={3}>
      <Input
        placeholder={placeholder}
        InputLeftElement = {
          <Icon as = {
            <MaterialIcons 
              name={icon}
              color={THEME.colors.blue[300]}
              style={styles.icon}
            />
          }/>
        }
        borderRadius={30}
        fontSize={"sm"}
        lineHeight={"sm"}
        height={"16"}
        alignItems={"center"}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: THEME.fontSizes.lg,
    lineHeight: THEME.fontSizes.lg,
    left: 10,
  }
});