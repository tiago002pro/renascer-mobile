import { ITagProps, Input } from "native-base";

interface InputProps extends ITagProps {
  placeholder: string;
}

export default function InputComponent({ placeholder }: InputProps) {
  return (
    <Input placeholder={placeholder}
      fontSize={"sm"}
      lineHeight={"sm"}
      height={45}
      width={"100%"}
      borderRadius={5}
      justifyContent={"center"}
      alignItems={"center"}
      borderWidth={2}
      backgroundColor={"orange.100"}
      borderColor={"orange.100"}
      paddingLeft={"5%"}
      paddingRight={"5%"}
      marginBottom={2}
      _focus={{borderColor: "amber.500"}}
    />
  )
}