import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
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
    backgroundColor: "#000"
  },
  data: {
    height: "85%"
  },
});