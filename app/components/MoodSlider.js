import React, { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Slider from "@react-native-community/slider";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../constants/colors";
import MoodColors from "../constants/moodColors";
import Moods from "../constants/moods";
import MoodEmojis from "../constants/moodEmojis";

import Card from "./Card";
import DateChanger from "./DateChanger";

function MoodSlider(props) {
  const STARTING_MOOD = 3
  const [currentMood, setCurrentMood] = useState(STARTING_MOOD);
  const [currentDate, setCurrentDate] = useState(Date.now())

  return (
    <View style={[styles.container]}>
      <Card style={styles.card}>
        <FontAwesome5
          name={MoodEmojis[currentMood]}
          size={64}
          color={MoodColors[currentMood]}
        />
        <Text style={[styles.moodText]}>{Moods[currentMood]}</Text>
        <Slider
          style={[styles.slider]}
          minimumValue={0}
          maximumValue={4}
          value={STARTING_MOOD}
          minimumTrackTintColor={MoodColors[currentMood]}
          thumbTintColor={MoodColors[currentMood]}
          onValueChange={(value) => setCurrentMood(Math.round(value))}
        ></Slider>
        <DateChanger date={currentDate} style={styles.dateChanger} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    alignItems: "center",
    padding: 30,
    backgroundColor: "white"
  },

  slider: {
    width: "75%",
    marginVertical: 5,
  },

  moodText: {
    fontSize: 16,
    marginTop: 15
  },
  
  dateChanger: {
    marginTop: 20
  }
});

export default MoodSlider;
