import { Select, View } from "native-base";
import { MaterialIcons } from 'react-native-vector-icons';

import { THEME } from "../../../styles/theme";

interface SelectProps {
  options?: any[];
  valiable?: any;
  setValiable?: (variable: any) => void;
}

export default function SelectComponent({ options, valiable, setValiable }: SelectProps) {
  return (
    <View>
      <Select
        selectedValue={valiable}
        onValueChange={setValiable}
        height={45}
        borderRadius={10}
        borderColor={'#FFF'}
        borderWidth={1}
        color={'#FFF'}
        fontSize={'md'}
        dropdownIcon={<MaterialIcons name="keyboard-arrow-down" color={'#FFF'} size={30} />}
      >
        {options.map(item => {
          return <Select.Item
            label={item.label}
            value={item.key}
            id={item.key}
            _text={{
              color: THEME.colors.backgroud,
            }}
          />
        })}
      </Select>
    </View>
  );
}