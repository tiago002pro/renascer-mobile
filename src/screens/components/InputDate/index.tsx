import { useState } from "react";
import { Platform } from "react-native";
import { Box, Button, Text, View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';

import { THEME } from "../../../styles/theme";
import { styles } from "./InputDate";

interface InputProps {
  valiable?: any;
  setValiable?: (variable: any) => void;
}

export default function InputDateComponent({ valiable, setValiable }: InputProps) {
  const [show, setShow] = useState(false);
  const [iosPlatform, setIosPlatform] = useState(false);

  const onChangeDateOfBirth = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    const currentDate = selectedValue || new Date();
    setValiable(currentDate)
  }

  const showDatePicker = () => {
    setShow(true);
    setIosPlatform(Platform.OS === 'ios');
  };

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  
  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={styles.input}>
        <Text style={styles.label}>{formatDate(valiable)}</Text>
      </TouchableOpacity>
      {show &&
        (
          <View>
            <DateTimePicker
              value={valiable}
              locale="pt-br"
              is24Hour={true}
              mode="date"
              display="spinner"
              onChange={onChangeDateOfBirth}
              textColor={THEME.colors.white}
            />
            {iosPlatform ? 
              <Box w={'100%'} alignItems={'flex-end'}>
                <Button
                  onPress={() => setShow(false)}
                  style={styles.btn}
                  _text={{
                    color:  THEME.colors.backgroud,
                  }}
                >OK</Button>
              </Box> 
              : null 
            }
          </View>
        )
      }
    </View>
  );
}