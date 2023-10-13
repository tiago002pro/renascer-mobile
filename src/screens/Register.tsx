import { useState } from "react";
import { Box, Button, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";
import TextInputComponent from "../components/TextInputComponent";
import ButtonComponent from "../components/ButtonComponent";

export default function Register({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  return(
    <VStack style={styles.container} safeArea>
      <TextInputComponent
        placeholder={"Nome e sobrenome"}
        icon={"user"}
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
        value={password}
        onChangeText={setPassword}
      />
      <TextInputComponent
        placeholder={"Telefone"}
        icon={"phone"}
        value={phone}
        onChangeText={setPhone}
      />
      <ButtonComponent onPress={() => navigation.navigate('Home')}>Cadastrar</ButtonComponent>
      <Box style={styles.footerArea}>
        <Text color={'gray.500'}>Já possui conta?</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          style={styles.footerBtn}
          p={0}
          _text={{
            color: 'orange.400'
          }}
        >
          Fazer Login
        </Button>
      </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
  },
  footerArea: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center'
  },
  footerBtn: {
    backgroundColor: 'transparent',
    left: 5
  },
});