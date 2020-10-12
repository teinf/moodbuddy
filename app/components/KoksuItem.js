import React from "react";
import { View, Text, StyleSheet } from "react-native";

function KoksuItem({ koks }) {
  return (
    <View style={[styles.mainContainer]}>
      <Text style={[styles.itemName]}>{koks.name}</Text>
      <Text style={[styles.itemKey]}>{koks.key}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemName: {
    fontWeight: "800",
    color: "white"
  },
  itemKey: {
      color: "#f6f6f6"
  },

  mainContainer: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    padding: 30,
    marginBottom: 15,
    backgroundColor: "mediumslateblue",
    width: "100%"
  },
});

export default KoksuItem;
