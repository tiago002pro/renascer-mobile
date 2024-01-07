import { View } from "react-native";
import { Box, Text } from "native-base";

import { styles } from "./styles/InfoProfileComponent";

import { Person } from "../interface/Person";
import { Address } from "../interface/Address";

type Props = {
  section: string;
  person: Person;
}

export default function InfoProfileComponent({ section, person }: Props) {
  const address: Address = person?.address;

  function getAddress(): string {
    return address?.publicPlace + ', ' + address?.number + ' - ' + address?.city + '/' + address?.state;
  }

  function getGender() {
    switch(person?.gender) {
      case 'FEMALE':
        return 'Feminino'
      case 'MALE':
        return 'Masculino'
    }
  }

  function getMaritalStatus() {
    switch(person?.maritalStatus) {
      case 'SINGLE':
        return 'Solteiro(a)'
      case 'GROOM':
        return 'Noivo(a)'
      case 'MARRIED':
        return 'Casado(a)'
      case 'STABLEUNION':
        return 'União estável'
      case 'WIDOWER':
        return 'Viúvo(a)'
      case 'DIVORCED':
        return 'Divorciado(a)'
    }
  }

  return (
    <View>
      {section === 'BASIC' ? (
        <View style={styles.container}>
          <Box style={styles.item}>
            <Text style={styles.label}>Nome completo:</Text>
            <Text style={styles.value}>{person?.name}</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Sexo:</Text>
            <Text style={styles.value}>{getGender()}</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Data de nascimento:</Text>
            <Text style={styles.value}>{person?.dateBirth}</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Estado civil:</Text>
            <Text style={styles.value}>{getMaritalStatus()}</Text>
          </Box>
        </View>
      ) : null}

      {section === 'CONTACT' ? (
        <View style={styles.container}>
          <Box style={styles.item}>
            <Text style={styles.label}>E-mail:</Text>
            <Text style={styles.value}>{person?.email}</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Celular:</Text>
            <Text style={styles.value}>{person?.cellPhone}</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.value}>{person?.phone}</Text>
          </Box>
        </View>
      ) : null}

      {section === 'ADDRESS' ? (
        <View style={styles.container}>
          <Box style={styles.item}>
            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.value}>{getAddress()}</Text>
            <Text style={styles.value}>CEP {address?.zipCode}</Text>
          </Box>
        </View>
      ) : null}
    </View>
  );
};