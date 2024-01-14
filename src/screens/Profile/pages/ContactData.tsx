import { useEffect, useState } from "react";
import { Box, Button, VStack } from "native-base";
import { Masks } from "react-native-mask-input";
import { showMessage } from "react-native-flash-message";

import PersonService from "../service/PersonService";

import InputTextComponent from "../../components/InputText";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/ContactData";

export function ContactData({ navigation, route }) {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    if (route.params?.person) {
      const person = route.params?.person
      setPerson(person)
    }
  }, [route.params?.person])

  function setEmail(email) {
    setPerson({...person, email: email})
  }

  function setCellPhone(cellPhone) {
    setPerson({...person, cellPhone: cellPhone})
  }

  function setPhone(phone) {
    setPerson({...person, phone: phone})
  }

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
      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'E-mail'}
          valiable={person?.email}
          setValiable={setEmail}
        />
      </Box>

      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'Celular'}
          type={'phone-pad'}
          valiable={person?.cellPhone}
          setValiable={setCellPhone}
          mask={Masks.BRL_PHONE}
        />
      </Box>

      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'Telefone'}
          type={'phone-pad'}
          valiable={person?.phone}
          setValiable={setPhone}
          mask={["(", /\d/, /\d/, ") ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
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
    </VStack>
  );
}