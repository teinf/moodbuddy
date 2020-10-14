import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";

import Colors from "../constants/colors";

function KoksuItem({ koks, onDelete }) {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, koks.key)}>
      <Card style={styles.mainContainer}>
        <Text style={[styles.itemName]}>{koks.name}</Text>
        <Text style={[styles.itemKey]}>{koks.key}</Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemName: {
    fontWeight: "800",
    color: "white",
    fontSize: 22,
  },

  itemKey: {
    color: Colors.light,
  },

  mainContainer: {
    flexDirection: "column",
    padding: 30,
    marginBottom: 15,
    backgroundColor: Colors.primary,
    width: "100%",
  },
});

export default KoksuItem;
