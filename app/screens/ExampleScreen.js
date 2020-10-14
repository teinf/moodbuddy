import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import AsyncStorage from '@react-native-community/async-storage';

import KoksuItem from "../components/KoksuItem";
import Colors from "../constants/colors";

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

async function data(){
  try {
    await AsyncStorage.setItem(
      'key',
      'I like to save it.'
    );
  } catch (error) {
    console.log(error)
  }
  try {
    const value = await AsyncStorage.getItem('key');
    if (value !== null) {
      setKoksy((currentKoksy) => [...currentKoksy,{key: uuidv4(), name: value}])

    }
  } catch (error) {
    console.log('nie')
  }
  
};

  function deleteKoks(koksKey) {
    setKoksy((currentKoksy) =>
      currentKoksy.filter((item) => item.key !== koksKey)
    );
    data()
  }

  return (
    <View style={styles.screen}>
      <Text style={[styles.title]}>Największe koksy</Text>
      <FlatList
        data={koksy}
        renderItem={({ item }) => (
          <KoksuItem koks={item} onDelete={deleteKoks} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 34,
    color: Colors.primary,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default ExampleScreen;
