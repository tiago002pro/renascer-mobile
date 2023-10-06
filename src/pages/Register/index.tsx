import { Button, Text, View } from "native-base";
import TextInputComponent from "../../components/TextInputComponent";
import { useState } from "react";
import { doRegister } from "../../services/AuthenticationService";

export default function Register({ navigation }: any)
{
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [passWord, setsetPassWordame] = useState('')

  async function register() {
    const result = await doRegister(name, email, passWord)
    console.log("result", result.login);
    if (result) {
      navigation.replace('Login')
    } else {
      console.log("Erro");
    }
  }

  return(
    <View flex={1} p={"5%"} backgroundColor={"backgroud"}>
      <TextInputComponent
        placeholder={"Nome e sobrenome"}
        icon={"person"}
        value={name}
        onChangeText={setName}
      />
      <TextInputComponent
        placeholder={"E-mail"}
        icon={"mail"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInputComponent
        placeholder={"Senha"}
        icon={"lock"}
        passWordType={true}
        value={passWord}
        onChangeText={setsetPassWordame}
      />
      {/* <TextInputComponent placeholder={"Data de nascimento"} icon={"cake"}/> */}
      {/* <TextInputComponent placeholder={"Confirmar senha"} icon={"lock"}/> */}

      <Button
        onPress={register}
        backgroundColor={"blue.300"}
        borderRadius={30}
        height={50}
      >
        <Text
          color={"white"}
          fontSize={"sm"}
          lineHeight={"sm"}
          textTransform={"uppercase"}
          fontFamily={"MontserratLight"}
        >
          Registrar
        </Text>
      </Button>
    </View>
  );
}