import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../constants/colors";
import MoodColors from "../constants/moodColors";
import Moods from "../constants/moods";
import MoodEmojis from "../constants/moodEmojis";

import Card from "./Card";

function MoodSlider(props) {
  const [currentMood, setCurrentMood] = useState(0);

  return (
    <View style={[styles.container]}>
      <FontAwesome5
        name={MoodEmojis[currentMood]}
        size={64}
        color={MoodColors[currentMood]}
      />
      <Slider
        style={[styles.slider]}
        minimumValue={0}
        maximumValue={4}
        value={2}
        minimumTrackTintColor={MoodColors[currentMood]}
        // maximumTrackTintColor={MoodColors[currentMood]}
        thumbTintColor={MoodColors[currentMood]}
        onValueChange={(value) => setCurrentMood(Math.round(value))}
      ></Slider>
      <Text style={[styles.moodText]}>{Moods[currentMood]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },

  slider: {
    width: "75%",
    marginVertical: 20,
  },

  moodText: {
    fontSize: 16,
  },
});

export default MoodSlider;
