import { Input, Text, View } from "native-base";
import { TextInput } from "react-native-paper";

import { THEME } from "../../../styles/theme";
import { styles } from "./InputText";
import MaskInput from "react-native-mask-input";

interface InputProps {
  label?: string;
  type?: any;
  valiable?: any;
  setValiable?: (variable: any) => void;
  onChange?: (variable: any) => void;
  mask?: any;
}

export default function InputTextComponent({ label, type, valiable, setValiable, onChange, mask }: InputProps) {

  return (
    <View>
      <TextInput
        label={label}
        value={valiable}
        onChangeText={setValiable}
        mode='outlined'
        keyboardType={type ? type : 'default'}
        style={styles.input}
        textColor="#FFF"
        outlineStyle={{
          borderColor: '#FFF',
        }}
        cursorColor={'#FFF'}
        theme={{colors: { placeholder: 'white' , text: 'white', primary: 'white', onSurfaceVariant: 'white'}}}
        render={props => 
          <MaskInput
            {...props}
            mask={mask}
          />
        }
      />
      {/* <Input
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
          // borderWidth: 2,
          color: THEME.colors.white,
        }}
      /> */}
    </View>
  );
}