import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { VStack, Box } from 'native-base';

export default function Login({ navigation }) {

  return (
    <VStack style={styles.container} safeArea>
      <Box style={styles.containerLogo}>
        <Image 
          source={require("./../../assets/logo.png")} 
          style={{ width: "35%" }}
          resizeMode="contain"
        />
      </Box>

      <Box style={styles.containerForm}>
        <Text style={styles.title}>Faça o login</Text>

        <TextInput
          style={styles.input} 
          placeholder="E-mail"
        />

        <TextInput
          style={styles.input} 
          placeholder="Senha"
        />

        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.buttonLoginText}>Fazer login</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
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
    marginBottom: 20,
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