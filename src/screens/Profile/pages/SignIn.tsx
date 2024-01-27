import React, { useState } from "react";
import { Box, Button, Image, Text, VStack } from "native-base";

import { useAuth } from "../../../contexts/auth";

import TextInputComponent from "../../../components/TextInputComponent";
import ButtonComponent from "../../../components/ButtonComponent";

import { styles } from "../styles/SignIn";
import { THEME } from "../../../styles/theme";

export default function SignIn({ navigation }) {
  const {signed, signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  function onChangeEmail(email:string) {
    (email.length > 1) && (password.length > 1) ? setDisabledBtn(false) : setDisabledBtn(true)
    setEmail(email);
  }

  function onChangePassword(password:string) {
    (password.length > 1) && (email.length > 1) ? setDisabledBtn(false) : setDisabledBtn(true)
    setPassword(password);
  }

  async function handleSignIn() {
    const success = await signIn(email, password);
    
    if (success) {
      setSignInError(false)
      navigation.navigate('TabRoutes', {screen:'DashboardRoutes'});
    } else {
      setSignInError(true)
    }
  }

  function handleRegister() {
    navigation.navigate('Register')
  }

  return (
    <VStack style={styles.container}>
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
          icon={"mail"}
          value={email}
          onChangeText={onChangeEmail}
        />
        <TextInputComponent
          placeholder={"Senha"}
          icon={"lock"}
          value={password}
          onChangeText={onChangePassword}
          passWordType={true}
        />

        <Box h={10}>
          {signInError ? <Text color={'red.500'} fontWeight={'bold'}>Dados de login incorretos, tente novamente</Text> : null}
        </Box>

        <ButtonComponent
          label={'Entrar'}
          bntFunction={handleSignIn}
          isDisabled={disabledBtn}
          mb={10}
        />

        <Box style={styles.footerArea}>
          <Text color={THEME.colors.backgroud}>Não possui conta?</Text>
          <Button
            onPress={handleRegister}
            style={styles.footerBtn}
            p={0}
            _text={{
              color: THEME.colors.primary,
              fontWeight: 'bold',
            }}
          >
            Cadastre-se
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}