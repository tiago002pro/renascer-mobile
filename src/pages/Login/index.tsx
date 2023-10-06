import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { VStack, Box, Image } from 'native-base';
import ButtonComponent from "../../components/ButtonComponent";
import TextInputComponent from "../../components/TextInputComponent";
import { doLogin } from "../../services/AuthenticationService";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')

  async function login() {
    const retult = await doLogin(email, passWord)
    if (retult) {
      navigation.replace('Tabs')
    } else {
      console.log("Erro");
    }
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