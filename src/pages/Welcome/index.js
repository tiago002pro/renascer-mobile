import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image 
          source={require("./../../assets/logo.png")} 
          style={{ width: "35%" }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Bem-vindo(a)</Text>
        <Text style={styles.text}>Escolha uma opção</Text>

        <TouchableOpacity style={styles.buttonLogin} onPress={ () => navigation.navigate("Login") }>
          <Text style={styles.buttonLoginText}>Fazer login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate("Home")}>
          <Text style={styles.buttonRegisterText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0A500"
  },
  containerLogo: {
    flex: 1,
    backgroundColor: "#F0A500",
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