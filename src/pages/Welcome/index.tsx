import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Box, Text, Image } from 'native-base';

import ButtonComponent from "../../components/ButtonComponent";

export default function Welcome({ navigation }) {
  return (
    <VStack flex={1} background={"orange.400"}>
      <Box style={styles.containerLogo}>
        <Image 
          source={require("./../../assets/logo.png")} 
          alt="logo"
          style={{ width: "50%" }}
          resizeMode="contain"
        />
      </Box>

      <Box style={styles.containerForm}>
        <Text style={styles.title}>Bem-vindo(a)</Text>
        <Text style={styles.text} color={"gray.300"}>Escolha uma opção</Text>

        <ButtonComponent onPress={ () => navigation.navigate("Login") }>Fazer login</ButtonComponent>
        <ButtonComponent bg={"white"} borderColor={"gray.200"} color={"gray.300"}>Cadastre-se</ButtonComponent>
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
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },
});