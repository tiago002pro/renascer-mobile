import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Box, Image } from 'native-base';
import ButtonComponent from "../../components/ButtonComponent";
import TextInputComponent from "../../components/TextInputComponent";

export default function Login({ navigation }) {

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
        <TextInputComponent placeholder={"Email"} icon={"person"}/>
        <TextInputComponent placeholder={"Senha"} icon={"lock"}/>

        <ButtonComponent 
          onPress={ () => navigation.navigate("Tabs") }
        >
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