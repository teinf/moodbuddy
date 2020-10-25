import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import Card from "./Card";

import Colors from "../constants/colors";
import colors from "../constants/colors";
//import emotionEmojis from "../constants/emotionsEmojis";
import { FontAwesome5 } from "@expo/vector-icons";
//import emotionsEmojis from "../constants/emotionsEmojis";

var {height, width} = Dimensions.get('window');

export default function EmotionButton({ item, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={[styles.button, styles.emotionEmojis, style]}>
        <FontAwesome5
          name={item.emoji}
          size={24}
          color="white"
          style={styles.emotionEmojis}
        />
        <Text style={styles.buttonText}>{item.text}</Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    backgroundColor: colors.primary,
    width: width/2 - 10,
    height: 80,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 14,
    textAlign: "center",
  },
  FontAwesome5: {
    alignSelf: "center",
  },
  emotionEmojis: {
    alignSelf: "center",
  },
});
