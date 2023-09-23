import React from "react";
import { View, StyleSheet } from "react-native";

export default function Content() {
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        
      </View>
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