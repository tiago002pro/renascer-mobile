import { Box, Icon, Input } from "native-base";
import { StyleSheet } from "react-native";
import { Feather } from 'react-native-vector-icons';
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
            <Feather 
              name={icon}
              color={THEME.colors.gray[600]}
              style={styles.icon}
            />
          }/>
        }
        style={styles.input}
        color={"black"}
        borderColor={"transparent"}
        fontSize={"sm"}
        lineHeight={"sm"}
        backgroundColor={"gray.100"}
        _focus={{
          borderColor: "orange.500",
        }}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    color: '#000',
  },
  icon: {
    fontSize: THEME.fontSizes.lg,
    lineHeight: THEME.fontSizes.lg,
    left: 10,
    marginRight: 10,
  }
});