import { Button, ITagProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends ITagProps {
  children?: ReactNode;
  color?: string;
  bg?: string;
  bntFunction?: any;
}

export default function ButtonComponent({ children, color, bg, bntFunction, ...props }: ButtonProps) {
  return (
    <Button
      onPress={bntFunction}
      w={"100%"}
      bg={bg || "blue.300"}
      borderColor={"transparent"}
      borderWidth={3}
      borderRadius={30}
      _pressed={{
        backgroundColor: "blue.400",
        borderColor: "transparent",
      }}
      mt={2}
      _text={{
        fontSize:"md",
        lineHeight: "md",
        color: color || "white",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}