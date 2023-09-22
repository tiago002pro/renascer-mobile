import React from "react";
import { View, StyleSheet, Text } from "react-native";

import MenuBar from "../../components/MenuBar";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        
      </View>
      <MenuBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  data: {
    height: "85%"
  },
});