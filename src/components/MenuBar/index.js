import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';
import { useNavigation } from "@react-navigation/native";

import { icons } from "./../../utils/MenuIcons";

export default function MenuBar() {
  const navigation = useNavigation();

  return <View style={styles.menu}>
    <FlatList contentContainerStyle={{justifyContent: "space-between", flexDirection: "row", alignItems: "center", padding: "5%"}}
      style={styles.menu}
      data={icons}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <>
          <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate(item.route)}>
            <MaterialIcons name={item.icon} size={30} color="white"/>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        </>
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  menu: {
    height: "15%",
    backgroundColor: "#1a1a1a",
  },
  menuIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 10,
    marginTop: 10,
    color: "#fff",
    textTransform: "uppercase",
  },
});