import { useState } from "react";
import { View } from "react-native";
import { Box, Button } from "native-base";
import { Masks } from "react-native-mask-input";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/BasicData";
import SelectComponent from "../../components/SelectComponent";
import InputTextComponent from "../../components/InputText";

type BasicData = {
  firstName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: Date;
  maritalStatus?: string;
}

export function BasicData() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [maritalStatus, setMaritalStatus] = useState(null);

  const maritalStatusList = [
    {label: 'Solteiro(a)', key: '1'},
    {label: 'Noivo(a)', key: '2'},
    {label: 'Casado(a)', key: '3'},
    {label: 'União estável', key: '4'},
    {label: 'Viúvo(a)', key: '5'},
    {label: 'Divorciado(a)', key: '6'},
  ]

  const genderList = [
    {label: 'Feminino', key: 'FEMALE'},
    {label: 'Masculino', key: 'MALE'},
  ]

  async function save() {
    console.log("basicData", {firstName, lastName, gender, dateOfBirth, maritalStatus});
  }

  return (
    <View style={styles.container}>
      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'Nome'}
          valiable={firstName}
          setValiable={setFirstName}
        />
      </Box>

      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'Sobrenome'}
          valiable={lastName}
          setValiable={setLastName}
        />
      </Box>

      <Box style={styles.inputArea}>
        <SelectComponent
          options={genderList}
          label={'Gênero'}
          valiable={gender}
          setValiable={setGender}
        />
      </Box>

      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'Data de nascimento'}
          type={'numeric'}
          valiable={dateOfBirth}
          setValiable={setDateOfBirth}
          mask={Masks.DATE_DDMMYYYY}
        />
      </Box>

      <Box style={styles.inputArea}>
        <SelectComponent
          options={maritalStatusList}
          label={'Estado civil'}
          valiable={maritalStatus}
          setValiable={setMaritalStatus}  
        />
      </Box>

      <Box mt={5}>
        <Button
          onPress={save}
          backgroundColor={THEME.colors.white}
          _text={{
            color: THEME.colors.backgroud,
          }}
        >
          Salvar
        </Button>
      </Box>
    </View>
  );
}