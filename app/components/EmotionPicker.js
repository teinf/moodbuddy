import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import AsyncStorage from '@react-native-community/async-storage';

import KoksuItem from "./KoksuItem";
import MoodSlider from "./MoodSlider";
import FlatButton from "./MoodButton";
import Colors from "../constants/colors";
import Emotions from "../constants/emotions";
import EmotionsEmojis from "../constants/emotionsEmojis";




export default class EmotionPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emotions: [
        {key:0, text: Emotions[0], emoji: EmotionsEmojis[0], picked: false},
        {key:1, text: Emotions[1], emoji: EmotionsEmojis[1], picked: false},
        {key:2, text: Emotions[2], emoji: EmotionsEmojis[2], picked: false},
        {key:3, text: Emotions[3], emoji: EmotionsEmojis[3], picked: false},
        {key:4, text: Emotions[4], emoji: EmotionsEmojis[4], picked: false},
        {key:5, text: Emotions[5], emoji: EmotionsEmojis[5], picked: false},
        {key:6, text: Emotions[6], emoji: EmotionsEmojis[6], picked: false},
        {key:7, text: Emotions[7], emoji: EmotionsEmojis[7], picked: false},
        {key:8, text: Emotions[8], emoji: EmotionsEmojis[8], picked: false},
        {key:9, text: Emotions[9], emoji: EmotionsEmojis[9], picked: false},
        {key:10, text: Emotions[10], emoji: EmotionsEmojis[10], picked: false},
        {key:11, text: Emotions[11], emoji: EmotionsEmojis[11], picked: false},
        {key:12, text: Emotions[12], emoji: EmotionsEmojis[12], picked: false},
        {key:13, text: Emotions[13], emoji: EmotionsEmojis[13], picked: false},
        {key:14, text: Emotions[14], emoji: EmotionsEmojis[14], picked: false},
        {key:15, text: Emotions[15], emoji: EmotionsEmojis[15], picked: false},
        {key:16, text: Emotions[16], emoji: EmotionsEmojis[16], picked: false},
        {key:17, text: Emotions[17], emoji: EmotionsEmojis[17], picked: false},
    
      ],

      pickedItems: []
    }
  }

  onEmotionPress(item) {
    if(item.picked) {
      this.setState({
        picked
      })
      setPickedEmotions((emotions) => 
        emotions.filter((key) => key !== item.key)
      )
    }

    else {
      setPickedEmotions((emotions) => [...emotions, item.key])
    }

    item.picked = !item.picked;

  }
  render() {
    return (
      <View style={styles.screen}>
        <Text style={[styles.title]}>Wybierz jak się czujesz</Text>
        <FlatList 
          numColumns={3}
          data={this.state.emotions}
          renderItem={({ item }) => (
            <FlatButton item={item} emotionEmojis={item.emoji} onPress={() => {
              onEmotionPress(item);
              onValueChange(this.state.pickedItems);
            }}
              style={[styles.FlatButton, {backgroundColor: item.picked ? "black": "red"}]} 
            />
          )}
        />
      </View>
    );
  }
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
    textAlign: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  emotionEmojis: {
    justifyContent: "center",
  },
});

export default EmotionPicker;
