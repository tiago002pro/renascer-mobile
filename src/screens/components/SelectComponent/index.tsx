import { Box, Select, Text, View } from "native-base";
import { MaterialIcons } from 'react-native-vector-icons';

import { THEME } from "../../../styles/theme";

interface SelectProps {
  options?: any[];
  label: string;
  valiable?: any;
  setValiable?: (variable: any) => void;
}

export default function SelectComponent({ options, label, valiable, setValiable }: SelectProps) {
  return (
    <View mt={2}>
      <Box
        backgroundColor={ THEME.colors.backgroud}
        position={'absolute'}
        paddingLeft={1.5}
        paddingRight={1.5}
        left={3}
        top={-10}
        zIndex={9999}
      >
        <Text color={'white'} fontSize={12}>{label}</Text>
      </Box>
      <Select
        id={label}
        selectedValue={valiable}
        onValueChange={setValiable}
        height={39}
        borderRadius={5}
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