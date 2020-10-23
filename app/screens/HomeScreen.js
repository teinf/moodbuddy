import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import DateChanger from "../components/DateChanger";
import MoodSlider from "../components/MoodSlider";
import Colors from "../constants/colors";

import saveData from "../utils/saveData";
import getData from "../utils/getData";

import AsyncStorage from '@react-native-community/async-storage';
import { withSafeAreaInsets } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date(Date.now()));
  const [mood, setMood] = useState(0);

  async function onSaveButtonPress() {
    await saveData(currentDate.getTime().toString(), {
      mood: mood,
      emotions: [1, 2, 3],
    });

    const allKeys = await AsyncStorage.getAllKeys();
    allKeys.sort()
    for(var i=0; i<allKeys.length; i++) {
        console.log(allKeys[i])
    }
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.welcomeText}>Jak się masz?</Text>
      <MoodSlider onValueChange={(moodValue) => setMood(moodValue)} />
      <DateChanger
        date={currentDate}
        mode="datetime"
        style={styles.dateChanger}
      />

      <Button title="Zapisz" onPress={onSaveButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 28,
    color: Colors.primary,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
  },
  dateChanger: {
    padding: 20,
  },
});

export default HomeScreen;
