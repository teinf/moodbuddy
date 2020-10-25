import React, { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Slider from "@react-native-community/slider";
import { FontAwesome5 } from "@expo/vector-icons";

import MoodColors from "../constants/moodColors";
import MoodNames from "../constants/moodNames";
import MoodEmojis from "../constants/moodEmojis";

import Card from "./Card";

function MoodSlider({onValueChange=function(value) {}}) {
  const STARTING_MOOD = 3
  const [currentMood, setCurrentMood] = useState(STARTING_MOOD);

  function onSliderChange(value) {
    setCurrentMood(Math.round(value))
    onValueChange(currentMood);
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.card}>
        <Text style={[styles.moodText]}>{MoodNames[currentMood]}</Text>
        <Slider
          style={[styles.slider]}
          minimumValue={0}
          maximumValue={4}
          value={STARTING_MOOD}
          minimumTrackTintColor={MoodColors[currentMood]}
          thumbTintColor={MoodColors[currentMood]}
          onValueChange={(value) => onSliderChange(value)}
        ></Slider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    width: "100%",
    alignItems: "center",
    padding: 10,
  },

  slider: {
    width: "75%",
  },

  moodText: {
    fontSize: 16,
    marginTop: 15
  },
});

export default MoodSlider;
