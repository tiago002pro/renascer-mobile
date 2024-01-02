import { Input, View } from "native-base";
import { THEME } from "../../../styles/theme";

interface InputProps {
  valiable?: any;
  setValiable?: (variable: any) => void;
}

export default function InputTextComponent({ valiable, setValiable }: InputProps) {
  return (
    <View>
      <Input
        value={valiable}
        onChangeText={setValiable}
        borderRadius={10}
        borderWidth={0}
        _input={{
          fontSize: 'md',
          backgroundColor: THEME.colors.backgroudLight,
          h: 50,
        }}
        _focus={{
          borderColor: THEME.colors.black,
          borderWidth: 2,
          backgroundColor: THEME.colors.backgroudLight,
        }}
      />
    </View>
  )
}