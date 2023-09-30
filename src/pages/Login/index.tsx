import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Box, Image, Text } from 'native-base';
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";

export default function Login({ navigation }) {

  return (
    <VStack flex={1} background={"orange.500"}>
      <Box style={styles.containerLogo}>
        <Image 
          source={require("./../../assets/logo.png")}
          alt="logo"
          style={{ width: "35%" }}
          resizeMode="contain"
        />
      </Box>

      <Box style={styles.containerForm}>
        <Text style={styles.title}>Faça o login</Text>

        <InputComponent placeholder="E-mail"/>
        <InputComponent placeholder="Senha"/>

        <ButtonComponent onPress={ () => navigation.navigate("Tabs") }>Fazer login</ButtonComponent>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    height: 45,
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0A500",
    paddingStart: "5%",
    paddingEnd: "5%",
    marginBottom: 10,
  },
  buttonLogin: {
    backgroundColor: "#F0A500",
    height: 45,
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonLoginText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});