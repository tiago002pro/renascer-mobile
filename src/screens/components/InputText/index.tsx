import { Input, View } from "native-base";

import { THEME } from "../../../styles/theme";

interface InputProps {
  valiable?: any;
  setValiable?: (variable: any) => void;
  onChange?: (variable: any) => void;
}

export default function InputTextComponent({ valiable, setValiable, onChange }: InputProps) {
  return (
    <View>
      <Input
        value={valiable}
        onChangeText={setValiable}
        onChange={onChange}
        borderRadius={10}
        borderWidth={1}
        h={45}
        _input={{
          backgroundColor: THEME.colors.backgroud,
          borderColor: THEME.colors.white,
          fontSize: 'md',
          color: THEME.colors.white,
        }}
        _focus={{
          backgroundColor: THEME.colors.backgroudLight,
          borderColor: THEME.colors.yellow[400],
          borderWidth: 2,
          color: THEME.colors.white,
        }}
      />
    </View>
  );
}