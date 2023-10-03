import { Button, Text, View } from "native-base";
import TextInputComponent from "../../components/TextInputComponent";

export default function Register() {
  return(
    <View flex={1} p={"5%"} backgroundColor={"backgroud"}>
      <TextInputComponent placeholder={"Nome e sobrenome"} icon={"person"}/>
      <TextInputComponent placeholder={"E-mail"} icon={"mail"}/>
      <TextInputComponent placeholder={"Data de nascimento"} icon={"cake"}/>
      <TextInputComponent placeholder={"Senha"} icon={"lock"}/>
      <TextInputComponent placeholder={"Confirmar senha"} icon={"lock"}/>
      <Button 
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