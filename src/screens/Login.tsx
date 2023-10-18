import { Box, Button, Image, Text, VStack, useToast } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import TextInputComponent from "../components/TextInputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { doLogin } from "../services/AuthenticationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const toast = useToast();

  useEffect(() => {
    async function verifyLogin() {
      const token = await AsyncStorage.getItem('token')
      const userId = await AsyncStorage.getItem('userId')
      console.log("LOGIN -> token: ", token);
      console.log("LOGIN -> userId: ", userId);
      if (token || userId) {
        navigation.navigate('Home')
      }
      setLoading(false)
    }
    verifyLogin()
  }, [])

  async function login() {
    const result = await doLogin(email, password)
    if (result) {
      const { token } = result
      const tokenDecoded: any = jwtDecode(token)
      await AsyncStorage.setItem('token', token)
      await AsyncStorage.setItem('userId', tokenDecoded.id)
      navigation.navigate('Home')
    } else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        backgroundColor: "red.500"
      })
    }
  }

  if(loading) {
    return null
  }

  return(
    <VStack style={styles.container} safeArea>
      <Box style={styles.containerLogo}>
        <Image
          source={require("./../assets/logo-cor.png")}
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

        <ButtonComponent bntFunction={login}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff'
  },
  containerLogo: {
    height: '30%',
    padding: '5%',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
  },
  footerArea: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center'
  },
  footerBtn: {
    backgroundColor: 'transparent',
    left: 5
  },
});
