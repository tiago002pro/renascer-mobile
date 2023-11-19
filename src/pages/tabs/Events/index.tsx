import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../../styles/theme";

export default function Events() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
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