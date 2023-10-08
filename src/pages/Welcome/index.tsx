import React from "react";
import { VStack, Box, Text, Image } from 'native-base';

import ButtonComponent from "../../components/ButtonComponent";

export default function Welcome({ navigation }) {
  return (
    <VStack flex={1} background={"white"} p={"5%"} safeArea>
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Image 
          source={require("./../../assets/logo-cor.png")} 
          alt="logo"
          style={{ width: "50%" }}
          resizeMode="contain"
        />
      </Box>

      <Box flex={1} justifyContent={"center"} alignItems={"justify"}>
        <Text color={"gray.300"}>Bem-vindo(a)</Text>
        <Text color={"gray.300"}>Escolha uma opção</Text>

        <ButtonComponent onPress={() => navigation.navigate("Login")}>Entrar</ButtonComponent>
        <ButtonComponent 
          onPress={() => navigation.navigate("Register")}
          bg={"white"}
          borderColor={"gray.200"}
          color={"blue.300"}
        >
          Cadastre-se
        </ButtonComponent>
      </Box>
    </VStack>
  )
}

// const styles = StyleSheet.create({
//   containerLogo: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   containerForm: {
//     flex: 2,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingStart: "5%",
//     paddingEnd: "5%",
//   },
//   title: {
//     fontSize: 24,
//     lineHeight: 24,
//     fontWeight: "bold",
//     marginTop: 20,
//     marginBottom: 5,
//     fontFamily: "FuturaMedium",
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 16,
//     marginBottom: 20,
//     fontWeight: "bold",
//   },
// });