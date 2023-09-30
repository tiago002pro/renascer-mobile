import { Button, ITagProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends ITagProps {
  children: ReactNode;
  color: string;
  bg: string;
}

export default function ButtonComponent({ children, color, ...props }: ButtonProps) {
  return (
    <Button
      w={"100%"}
      bg={"orange.500"}
      borderColor={"orange.500"}
      borderWidth={3}
      borderRadius={"lg"}
      _focus={{backgroundColor: "red"}}
      _pressed={{backgroundColor: "orange.700", borderColor: "orange.700"}}
      mt={2}
      _text={{fontSize:"sm", lineHeight: "sm", fontWeight:"bold", color: color || "white"}}
      {...props}
    >
      {children}
    </Button>
  );
}