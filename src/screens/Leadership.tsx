import { Box, Image, ScrollView, Text } from "native-base";
import { StyleSheet, View } from "react-native";

import { THEME } from "../styles/theme";

import image from './../assets/images/leadership.jpg';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Leadership() {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <Image
            source={image}
            alt="Leadership"
            style={styles.image}
          />
          <Text style={styles.title} marginBottom={50}>Pr. Marcio Ribeiro</Text>
          <Text style={styles.text}>Bem-vindo à Igreja Renascer</Text>
          <Text style={styles.text} marginBottom={30}>É muito bom ter você aqui conosco!</Text>
          <Text style={styles.text} marginBottom={30}>Aqui na Renascer nós prezamos por um relacionamento com Deus Pai, Filho e Espírito. Assim, nossa prioridade é passar tempo aprendendo a amar melhor a Deus e ao nosso próximo.</Text>
          <Text style={styles.text} marginBottom={50}>Entendemos que isso é feito através dos momentos de louvor, adoração, estudo da Palavra e também aprendendo como desenvolver nossos dons. Desejamos que a Igreja Renascer seja um lugar onde todos que entrarem sejam instigados a um andar de intimidade com Deus!</Text>
          <Text style={styles.subtitle} fontWeight={'bold'}>Marcio Ribeiro</Text>
          <Text style={styles.subtitle} fontStyle={'italic'}>Pastor Sênior</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  image: {
    width: 'auto',
    height: 400,
    marginBottom: 50,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  text: {
    fontSize: THEME.fontSizes.md,
    lineHeight: THEME.fontSizes.md + 10,
  },
  subtitle: {
    fontSize: THEME.fontSizes.md,
    lineHeight: THEME.fontSizes.md + 10,
  }
});