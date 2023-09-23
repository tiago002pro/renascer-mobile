import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import image from './../../assets/teste.jpg';
import image2 from './../../assets/teste2.jpg';

export default function Events() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Fique por dentro de nossos cultos semanais.
      </Text>

      <Text  style={styles.day}>Domingo</Text>
      <View style={styles.box}>
        <View style={styles.image}>
          <Image 
            source={image}
            style={{ width: "90%", height: "90%", borderRadius: 5 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>Sala de oração</Text>
          <Text style={styles.subTitle}>Domingo às 18:00</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.image}>
          <Image 
            source={image2}
            style={{ width: "90%", height: "90%", borderRadius: 5 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>Culto da família</Text>
          <Text style={styles.subTitle}>Domingo às 19:00</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
    padding: "5%"
  },
  text: {
    fontSize: 14,
    marginBottom: 30
  },
  day: {
    fontSize: 16,
    marginBottom: 5,
  },
  box: {
    width: "100%",
    height: "15%",
    marginBottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    width: "60%",
    padding: "2%"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 12
  }
});