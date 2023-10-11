import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { VStack, Box, Image, useToast } from 'native-base';
import ButtonComponent from "../../components/ButtonComponent";
import TextInputComponent from "../../components/TextInputComponent";
import { doLogin } from "../../services/AuthenticationService";

import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')
  const [loading, setLoading] = useState(true)
  const toast = useToast();

  useEffect(() => {
    async function verifyLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        navigation.replace('Tabs')
      }
      setLoading(false)
    }
    verifyLogin()
  }, [])

  async function login() {
    const retult = await doLogin(email, passWord)
    if (retult) {
      const { token } = retult
      const tokenDecoded: any = jwtDecode(token)
      AsyncStorage.setItem('token', token)
      AsyncStorage.setItem('userId', tokenDecoded.id)
      navigation.replace('Tabs')
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

  return (
    <VStack flex={1} background={"white"} safeArea>
      <Box style={styles.containerLogo}>
        <Image 
          source={require("./../../assets/logo-cor.png")}
          alt="logo"
          style={{ width: "40%" }}
          resizeMode="contain"
        />
      </Box>

      <Box style={styles.containerForm}>
        <TextInputComponent 
          placeholder={"Email"}
          icon={"person"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInputComponent
          placeholder={"Senha"}
          icon={"lock"}
          value={passWord}
          onChangeText={setPassWord}
          passWordType={true}
        />

        <ButtonComponent bntFunction={login}>
          Entrar
        </ButtonComponent>
      </Box>
    </VStack>
  )
}

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 2,
    backgroundColor: "#fff",
    paddingStart: "5%",
    paddingEnd: "5%",
  }
});