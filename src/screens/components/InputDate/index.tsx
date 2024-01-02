import { Button, Text, View } from "native-base";
import { THEME } from "../../../styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

interface InputProps {
  valiable?: any;
  setValiable?: (variable: any) => void;
}

export default function InputDateComponent({ valiable, setValiable }: InputProps) {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const onChangeDateOfBirth = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    const currentDate = selectedValue || new Date();
    setValiable(currentDate)
  }

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  
  const showDatePicker = () => {
    showMode('date');
  };

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
  };
  
  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <Text>{formatDate(valiable)}</Text>
      </TouchableOpacity>
      {show && (
        <View>
          <DateTimePicker
            value={valiable}
            locale="pt-br"
            is24Hour={true}
            mode="date"
            display="spinner"
            onChange={onChangeDateOfBirth}
          />
          <Button onPress={() => setShow(false)}>ok</Button>
        </View>

        )}
    </View>
  )
}