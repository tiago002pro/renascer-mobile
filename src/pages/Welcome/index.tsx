import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { VStack, Box } from 'native-base';
import ButtonComponent from "../../components/Button";

export default function Welcome({ navigation }) {
  return (
    <VStack flex={1} background={"orange.500"}>
      <Box style={styles.containerLogo}>
        <Image 
          source={require("./../../assets/logo.png")} 
          style={{ width: "35%" }}
          resizeMode="contain"
        />
      </Box>

      <Box style={styles.containerForm}>
        <Text style={styles.title}>Bem-vindo(a)</Text>
        <Text style={styles.text}>Escolha uma opção</Text>

        {/* <TouchableOpacity style={styles.buttonLogin} onPress={ () => navigation.navigate("Login") }>
          <Text style={styles.buttonLoginText}>Fazer login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate("Home")}>
          <Text style={styles.buttonRegisterText}>Cadastre-se</Text>
        </TouchableOpacity> */}

        <ButtonComponent onPress={ () => navigation.navigate("Login") }>Fazer login</ButtonComponent>
        <ButtonComponent bg={"white"} borderColor={"gray.200"} color={"gray.300"}>Cadastre-se</ButtonComponent>
      </Box>
    </VStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F0A500"
  },
  containerLogo: {
    flex: 1,
    // backgroundColor: "orange.100",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "#1a1a1a"
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
  buttonRegister: {
    backgroundColor: "#fff",
    height: 45,
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderColor: "#F0A500",
    borderWidth: 2,
  },
  buttonRegisterText: {
    fontSize: 14,
    color: "#F0A500",
    fontWeight: "bold",
  }
});