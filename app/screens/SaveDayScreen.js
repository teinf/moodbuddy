import React, { useState } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView, Image } from "react-native";
import Colors from "../constants/colors";

import saveData from "../utils/saveData";
import EmotionPicker from "../components/EmotionPicker";
import ComplimentAlert from "../components/ComplimentAlert";

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
      routes: [{ name: "MoodBuddy" }],
    });
  }

  return (
    <SafeAreaView style={styles.screen}>
      <EmotionPicker
        onValueChange={(v) => setEmotions(v)}
        ListHeaderComponent={
          <View>
            <Text style={styles.welcomeText}>Jak się czujesz?</Text>
            <Image source={require("../assets/ptak.png")} style={styles.ptak}/>
          </View>
        }
        ListFooterComponent={
          <View style={styles.buttons}>
            <Button style={{marginRight:15}} title="Zapisz" onPress={() => {
              onSaveButtonPress(mood)
              ComplimentAlert()
              navigation.reset({
                index: 0,
                routes: [{ name: "MoodBuddy" }],
              });
              }} />
            <Button
              title="Anuluj"
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "MoodBuddy" }],
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
  ptak: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 20
  }
});

export default SaveDayScreen;
