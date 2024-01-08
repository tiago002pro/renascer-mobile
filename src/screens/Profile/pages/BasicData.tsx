import { useEffect, useState } from "react";
import { Box, Button, ScrollView, VStack } from "native-base";
import { showMessage } from "react-native-flash-message";

import PersonService from "../service/PersonService";

import SelectComponent from "../../components/SelectComponent";
import InputTextComponent from "../../components/InputText";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/BasicData";

export function BasicData({ navigation, route }) {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    if (route.params?.person) {
      const person = route.params?.person
      setPerson(person)
    }
  }, [route.params?.person])

  function setName(name) {
    setPerson({...person, name: name})
  }

  function setGender(gender) {
    setPerson({...person, gender: gender})
  }

  function setDateBirth(dateBirth) {
    setPerson({...person, dateBirth: dateBirth})
  }

  function setMaritalStatus(maritalStatus) {
    setPerson({...person, maritalStatus: maritalStatus})
  }

  const maritalStatusList = [
    {label: 'Solteiro(a)', key: 'SINGLE'},
    {label: 'Noivo(a)', key: 'GROOM'},
    {label: 'Casado(a)', key: 'MARRIED'},
    {label: 'União estável', key: 'STABLEUNION'},
    {label: 'Viúvo(a)', key: 'WIDOWER'},
    {label: 'Divorciado(a)', key: 'DIVORCED'},
  ]

  const genderList = [
    {label: 'Feminino', key: 'FEMALE'},
    {label: 'Masculino', key: 'MALE'},
  ]

  async function save() {
    await PersonService.update(person).then(() => {
      showMessage({
        message: "Salvo com sucesso",
        type: "success",
      })
      navigation.goBack()
    }).catch(() => {
      showMessage({
        message: "Algo deu errado",
        type: "warning",
      })
    })
  }

  return (
    <VStack style={styles.container}>
      <ScrollView>
        <Box style={styles.inputArea}>
          <InputTextComponent
            label={'Nome Completo'}
            valiable={person?.name}
            setValiable={setName}
          />
        </Box>

        <Box style={styles.inputArea}>
          <SelectComponent
            options={genderList}
            label={'Gênero'}
            valiable={person?.gender}
            setValiable={setGender}
          />
        </Box>

        <Box style={styles.inputArea}>
          <InputTextComponent
            label={'Data de nascimento'}
            type={'numeric'}
            valiable={person?.dateBirth}
            setValiable={setDateBirth}
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          />
        </Box>

        <Box style={styles.inputArea}>
          <SelectComponent
            options={maritalStatusList}
            label={'Estado civil'}
            valiable={person?.maritalStatus}
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
      </ScrollView>
    </VStack>
  );
}