import { Text, View } from "react-native";

import { styles } from "../styles/Dashboard";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  );
}