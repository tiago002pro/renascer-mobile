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
      bg={"blue.300"}
      borderColor={"transparent"}
      borderWidth={3}
      borderRadius={30}
      colorScheme={"red"}
      _pressed={{
        backgroundColor: "blue.200",
        borderColor: "transparent",
      }}
      mt={2}
      _text={{
        fontSize:"md",
        lineHeight: "md",
        color: color || "white",
        fontFamily: "MontserratMedium"
      }}
      {...props}
    >
      {children}
    </Button>
  );
}