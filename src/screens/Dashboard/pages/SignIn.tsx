import React, { useState } from "react";
import { Box, Button, Image, Text, VStack } from "native-base";

import TextInputComponent from "../../../components/TextInputComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import { useAuth } from "../../../contexts/auth";
import { styles } from "../styles/SignIn";


export default function SignIn({ navigation }) {
  const {signed, signIn} = useAuth()
  console.log("signed", signed);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    signIn(email, password);
  }

  return (
    <VStack style={styles.container} safeArea>
      <Box style={styles.containerLogo}>
        <Image
          source={require("./../../../assets/images/logo-cor.png")}
          alt="logo"
          style={{ width: "40%" }}
          resizeMode='contain'
        />
      </Box>

      <Box style={styles.containerForm}>
        <TextInputComponent
          placeholder={"Email"}
          icon={"user"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInputComponent
          placeholder={"Senha"}
          icon={"lock"}
          value={password}
          onChangeText={setPassword}
          passWordType={true}
        />

        <ButtonComponent bntFunction={handleSignIn}>
          Entrar
        </ButtonComponent>

        <Box style={styles.footerArea}>
          <Text color={'gray.500'}>Não possui conta?</Text>
          <Button
            onPress={() => navigation.navigate('Register')}
            style={styles.footerBtn}
            p={0}
            _text={{
              color: 'orange.400'
            }}
          >
            Cadastre-se
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}