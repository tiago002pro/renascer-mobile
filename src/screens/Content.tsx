import { StyleSheet, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

export default function Content({ navigation }) {
  return(
    <View style={styles.container}>
        <ButtonComponent bntFunction={() => navigation.navigate('Leadership')}>Liderança</ButtonComponent>
        <ButtonComponent bntFunction={() => navigation.navigate('StackRoutes', {screen: 'Leadership'})}>Liderança</ButtonComponent>
        <ButtonComponent bntFunction={() => navigation.navigate('StackRoutes', {screen: 'About'})}>Sobre nós</ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});