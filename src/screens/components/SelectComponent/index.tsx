import { Select, View } from "native-base";

interface SelectProps {
  options?: any[];
  valiable?: any;
  setValiable?: (variable: any) => void;
}

export default function SelectComponent({ options, valiable, setValiable }: SelectProps) {
  return (
    <View>
      <Select selectedValue={valiable} onValueChange={setValiable}>
        {options.map(item => {
          return <Select.Item label={item.label} value={item.key} id={item.key} />
        })}
      </Select>
    </View>
  )
}