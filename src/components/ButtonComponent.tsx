import { Button, ITagProps } from "native-base";
import { StyleSheet } from "react-native";
import { ReactNode } from "react";
import { THEME } from "../styles/theme";

interface ButtonProps extends ITagProps {
  children?: ReactNode;
  color?: string;
  bg?: string;
  bntFunction?: any;
  props?: any;
}

export default function ButtonComponent({ label, color, bg, bntFunction, textTransform, isDisabled, ...props }: any) {
  return (
    <Button
      onPress={bntFunction}
      style={styles.btn}
      bg={bg || THEME.colors.primary}
      opacity={1}
      _pressed={{
        backgroundColor: "orange.500",
        borderColor: "transparent",
      }}
      mt={2}
      _text={{
        fontSize:"sm",
        lineHeight: "sm",
        color: color || "white",
        textTransform: textTransform ? textTransform : "uppercase",
        fontWeight:"bold"
      }}
      isDisabled={isDisabled}
      _disabled={{
        opacity: .5
      }}
      {...props}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    borderColor: 'transparent',
    shadowOffset: {width: -2, height: 5},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
  }
});