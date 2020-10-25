import React, { useState } from "react";
import { Text, View, StyleSheet, Button, StatusBar } from "react-native";
import DateChanger from "../components/DateChanger";
import MoodSlider from "../components/MoodSlider";
import Colors from "../constants/colors";

import saveData from "../utils/saveData";
import getData from "../utils/getData";
import getAllData from "../utils/getAllData";
import EmotionPicker from "../components/EmotionPicker";
import { ScrollView } from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date(Date.now()));
  const [mood, setMood] = useState(3);

  async function onSaveButtonPress() {
    await saveData(currentDate.getTime().toString(), {
      mood: mood,
      emotions: [],
    });
  }

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.welcomeText}>Jak się masz?</Text>
      <MoodSlider onValueChange={(moodValue) => setMood(moodValue)} />
      <DateChanger
        date={currentDate}
        mode="datetime"
        style={styles.dateChanger}
      />
      <Button
        title="Dalej"
        onPress={() =>
          navigation.navigate("Emocje", {
            date: currentDate.getTime(),
            mood: mood,
          })
        }
      />
      <Button title="Zapisz" onPress={() => onSaveButtonPress()} />
      <Button
        title="Anuluj"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          })
        }
      />
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
