import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import AsyncStorage from '@react-native-community/async-storage';

import KoksuItem from "../components/KoksuItem";
import MoodSlider from "../components/MoodSlider";
import FlatButton from "../components/MoodButton";
import Colors from "../constants/colors";

function MoodScreen(props) {
  const [moods, setMoods] = useState([
    {text: "Wesoły"},
    {text: "Pewny siebie"},
    {text: "Zadowolony"},
    {text: "Nudny"},
    {text: "Smutny"},
    {text: "Niewesoły"},
  ]);

  return (
    <View style={styles.screen}>
      <Text style={[styles.title]}>Nastroje</Text>
      <FlatList 
        numColumns={3}
        data={moods}
        renderItem={({ item }) => (
          <FlatButton item={item} onClick={console.log("Elo")} 
            style={[styles.FlatButton]} 

            
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 0,
    
  },
  FlatButton:{
    marginHorizontal:10,
    marginVertical: 10,
  },

  title: {
    fontWeight: "bold",
    fontSize: 34,
    color: Colors.primary,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default MoodScreen;
