import { StyleSheet, Text, View, Button } from "react-native";

import { useAuth } from '../../contexts/auth';

export default function Dashboard() {
  const { user, signOut } = useAuth()

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.title}>{user.email}</Text>
      <Button title="Sign Out" onPress={handleSignOut}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});