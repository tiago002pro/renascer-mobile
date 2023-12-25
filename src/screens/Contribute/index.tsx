import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../styles/theme";
import SlideComponent from "../../components/SlideComponent";

export default function Contribute() {
  return (
    <View style={styles.container}>
      <SlideComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: THEME.colors.white,
  }
});