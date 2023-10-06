import { Box, Icon, Input } from "native-base";
import { StyleSheet } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';
import { THEME } from "../styles/theme";

interface InputProps {
  placeholder?: string;
  passWordType?: boolean;
  icon?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function TextInputComponent({
  placeholder,
  passWordType,
  icon,
  value,
  onChangeText
}: InputProps): JSX.Element {
  return (
    <Box mb={3}>
      <Input
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        secureTextEntry={passWordType}
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