import { View } from "react-native";
import { Box, Text } from "native-base";

import { styles } from "../styles/BasicDataComponent";

export function BasicDataComponent({section}) {
  return (
    <View>
      {section === 0 ? (
        <View style={styles.container}>
          <Box style={styles.item}>
            <Text style={styles.label}>Nome completo:</Text>
            <Text style={styles.value}>Tiago Oliveira Barbosa</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Sexo:</Text>
            <Text style={styles.value}>Masculino</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Data de nascimento:</Text>
            <Text style={styles.value}>22/09/1996</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Estado civil:</Text>
            <Text style={styles.value}>Solteiro</Text>
          </Box>
        </View>
      ) : null}

      {section === 1 ? (
        <View style={styles.container}>
          <Box style={styles.item}>
            <Text style={styles.label}>E-mail:</Text>
            <Text style={styles.value}>tiagobarbosa02@outlook.com</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Celular:</Text>
            <Text style={styles.value}>(44) 98804-1230</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.value}>(44) 3221-8550</Text>
          </Box>
        </View>
      ) : null}

      {section === 2 ? (
        <View style={styles.container}>
          <Box style={styles.item}>
            <Text style={styles.label}>País:</Text>
            <Text style={styles.value}>Brasil</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>CEP:</Text>
            <Text style={styles.value}>87013-100</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.value}>Rua Piratininga</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Número:</Text>
            <Text style={styles.value}>119</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Cidade:</Text>
            <Text style={styles.value}>Maringá</Text>
          </Box>
          <Box style={styles.item}>
            <Text style={styles.label}>Estado:</Text>
            <Text style={styles.value}>PR</Text>
          </Box>
        </View>
      ) : null}
    </View>
  );
}