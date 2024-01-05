import { useState } from "react";
import { View } from "react-native";
import { Box, Button } from "native-base";
import { Masks } from "react-native-mask-input";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/ContactData";
import InputTextComponent from "../../components/InputText";

export function ContactData() {
  const [email, setEmail] = useState(null);
  const [cellPhone, setCellPhone] = useState(null);
  const [phone, setPhone] = useState(null);

  async function save() {
    console.log("ContactData", {email, cellPhone, phone});
  }

  return (
    <View style={styles.container}>
      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'E-mail'}
          valiable={email}
          setValiable={setEmail}
        />
      </Box>

      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'Celular'}
          type={'phone-pad'}
          valiable={cellPhone}
          setValiable={setCellPhone}
          mask={Masks.BRL_PHONE}
        />
      </Box>

      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'Telefone'}
          type={'phone-pad'}
          valiable={phone}
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
    </View>
  );
}