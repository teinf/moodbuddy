import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import KoksuItem from "../components/KoksuItem";

function ExampleScreen(props) {
  const [koksy, setKoksy] = useState([
    { key: uuidv4(), name: "Norbert" },
    { key: uuidv4(), name: "Kamil" },
    { key: uuidv4(), name: "Patryk" },
    { key: uuidv4(), name: "Kuba" },
    { key: uuidv4(), name: "Olek" },
    { key: uuidv4(), name: "Grochu" },
    { key: uuidv4(), name: "Japczan" },
    { key: uuidv4(), name: "Sebastian" },
    { key: uuidv4(), name: "Arrow" },
    { key: uuidv4(), name: "Ivan" },
  ]);

  return (
    <View style={styles.screen}>
      <Text style={[styles.title]}>Najwększe koksy</Text>
      <FlatList
        data={koksy}
        renderItem={({ item }) => <KoksuItem koks={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
        marginBottom: 100
    },

    title: {
        fontWeight: "bold",
        fontSize: 34,
        color: "mediumslateblue",
        alignSelf:"center",
        marginVertical: 20,
    }    
})

export default ExampleScreen;
