import React, { useState } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import DateChanger from "../components/DateChanger";
import MoodSlider from "../components/MoodSlider";
import Colors from "../constants/colors";

import saveData from "../utils/saveData";
import getData from "../utils/getData";
import getAllData from "../utils/getAllData";
import EmotionPicker from "../components/EmotionPicker";
import { ScrollView } from "react-native-gesture-handler";

function SaveDayScreen({ route, navigation }) {
  const date = new Date(route.params.date);
  const mood = route.params.mood;

  const [emotions, setEmotions] = useState([]);

  async function onSaveButtonPress() {
    await saveData(date.getTime().toString(), {
      mood: mood,
      emotions: emotions,
    });

    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  }

  return (
    <SafeAreaView style={styles.screen}>
      <EmotionPicker
        onValueChange={(v) => setEmotions(v)}
        ListHeaderComponent={
          <Text style={styles.welcomeText}>Jak się czujesz?</Text>
        }
        ListFooterComponent={
          <View style={styles.buttons}>
            <Button title="Zapisz" onPress={() => {
              onSaveButtonPress()
              navigation.reset({
                index: 0,
                routes: [{ name: "Dashboard" }],
              });
              }} />
            <Button
              title="Anuluj"
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Dashboard" }],
                });
              }}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
    flex: 1,
  },
  welcomeText: {
    fontSize: 28,
    color: Colors.primary,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20
  },
});

export default SaveDayScreen;