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
              color={THEME.colors.backgroud}
              style={styles.icon}
            />
          }/>
        }
        color={THEME.colors.backgroud}
        borderBottomWidth={1}
        borderTopWidth={0}
        borderLeftWidth={0}
        borderRightWidth={0}
        borderBottomColor={THEME.colors.backgroud}
        fontSize={"sm"}
        lineHeight={"sm"}
        _focus={{
          backgroundColor: 'transparent'
        }}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: THEME.fontSizes.lg,
    lineHeight: THEME.fontSizes.lg,
    padding: 10
  }
});