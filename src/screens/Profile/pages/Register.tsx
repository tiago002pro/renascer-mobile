import { useState } from "react";
import { Box, Button, Text, VStack } from "native-base";

import { doRegister } from "../../../services/auth";

import TextInputComponent from "../../../components/TextInputComponent";
import ButtonComponent from "../../../components/ButtonComponent";

import { styles } from "../styles/Register";
import { THEME } from "../../../styles/theme";

export default function Register({ navigation }) {
  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [role] = useState('USER')

  async function register() {
    const result = await doRegister({name, login, password, role})
    if (result) {
      navigation.replace('SignIn')
    } else {
      console.log("Erro");
    }
  }

  return(
    <VStack style={styles.container} safeArea>
      <TextInputComponent
        placeholder={"Nome e sobrenome"}
        icon={"user"}
        value={name}
        onChangeText={setName}
      />
      <TextInputComponent
        placeholder={"E-mail"}
        icon={"mail"}
        value={login}
        onChangeText={setLogin}
      />
      <TextInputComponent
        placeholder={"Senha"}
        icon={"lock"}
        passWordType={true}
        value={password}
        onChangeText={setPassword}
      />
      
      <ButtonComponent
        label={'Cadastrar'}
        onPress={register}
        mt={10}
        mb={10}
      />

      <Box style={styles.footerArea}>
        <Text color={ THEME.colors.backgroud}>Já possui conta?</Text>
        <Button
          onPress={() => navigation.navigate('SignIn')}
          style={styles.footerBtn}
          p={0}
          _text={{
            color: THEME.colors.primary,
            fontWeight: 'bold',
          }}
        >
          Fazer Login
        </Button>
      </Box>
    </VStack>
  );
}