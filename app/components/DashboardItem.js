import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Card from '../components/Card';

function DashboardItem({ navigation, title, description, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default DashboardItem;
