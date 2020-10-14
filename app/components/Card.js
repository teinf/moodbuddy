import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function Card(props) {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    backgroundColor: Colors.light,
    borderRadius: 15,
  },
});

export default Card;
