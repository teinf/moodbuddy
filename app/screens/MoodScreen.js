import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import AsyncStorage from '@react-native-community/async-storage';

import KoksuItem from "../components/KoksuItem";
import MoodSlider from "../components/MoodSlider";
import FlatButton from "../components/MoodButton";
import Colors from "../constants/colors";
import emotions from "../constants/emotions";
import emotionsEmojis from "../constants/emotionsEmojis";

function MoodScreen(props) {
  const [moods, setMoods] = useState([
    {key:0, text: emotions[0], emoji: emotionsEmojis[0]},
    {key:1, text: emotions[1], emoji: emotionsEmojis[1]},
    {key:2, text: emotions[2], emoji: emotionsEmojis[2]},
    {key:3, text: emotions[3], emoji: emotionsEmojis[3]},
    {key:4, text: emotions[4], emoji: emotionsEmojis[4]},
    {key:5, text: emotions[5], emoji: emotionsEmojis[5]},
  ]);
  
  
  return (
    <View style={styles.screen}>
      <Text style={[styles.title]}>Nastroje</Text>
      <FlatList 
        numColumns={3}
        data={moods}
        renderItem={({ item }) => (
          <FlatButton item={item} emotionEmojis={item.emoji} onClick={()=>("")} 
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
    marginTop: 5,
    marginBottom: 10,
  },
  emotionEmojis: {
    justifyContent: "center",
  },
});

export default MoodScreen;
