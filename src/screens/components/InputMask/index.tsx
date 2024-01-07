import { View } from "native-base";
import MaskInput from "react-native-mask-input";

import { THEME } from "../../../styles/theme";
import { styles } from "./InputMask";

interface InputProps {
  valiable?: any;
  setValiable?: (variable: any) => void;
  mask?: any;
  keyboardType?: any;
  maxLength?: number;
  saveWithMask?: boolean;
}

export default function InputMaskComponent({ valiable, setValiable, mask, keyboardType, maxLength, saveWithMask }: InputProps) {
  return (
    <View>
      <MaskInput
        value={valiable}
        onChangeText={(masked, unmasked, obfuscated) => {
          setValiable(saveWithMask ? masked : unmasked)
        }}
        mask={mask}
        style={styles.input}
        keyboardType={keyboardType}
        maxLength={maxLength || null}
        placeholderTextColor={THEME.colors.backgroud}
      />
    </View>
  );
}