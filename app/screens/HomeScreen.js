import React, { useState } from "react";
import { Text, View, StyleSheet, Button, StatusBar, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateChanger from "../components/DateChanger";
import MoodSlider from "../components/MoodSlider";
import Colors from "../constants/colors";

import saveData from "../utils/saveData";
import ComplimentAlert from "../components/ComplimentAlert";
import resetTimestampHours from "../utils/resetTimestampHours";

const images = [
  require("../assets/babka0.png"),
  require("../assets/babka1.png"),
  require("../assets/babka2.png"),
  require("../assets/babka3.png"),
  require("../assets/babka4.png"),
];

function HomeScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date(resetTimestampHours(Date.now())));
  const [mood, setMood] = useState(3);
  const [imageURI, setImageURI] = useState(require("../assets/babka3.png"));

  async function onSaveButtonPress() {
    console.log()
    await saveData(currentDate.getTime().toString(), {
      mood: mood,
      emotions: [],
    });

    navigation.reset({
      index: 0,
      routes: [{ name: "MoodBuddy" }],
    });
  }

  return (
    <ScrollView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.welcomeText}>Jak się masz?</Text>
      <Image fadeDuration={0} source={imageURI} style={styles.babka} />
      <MoodSlider
        onValueChange={(moodValue) => {
          setMood(moodValue);
          setImageURI(images[moodValue])
        }}
      />
      <DateChanger
        date={currentDate}
        mode="date"
        style={styles.dateChanger}
        onDateChange={(d) => {setCurrentDate(d);}}
      />
      <View style={styles.buttons}>
        <Button
          title="Dalej"
          onPress={() =>
            navigation.navigate("Emocje", {
              date: resetTimestampHours(currentDate.getTime()),
              mood: mood,
            })
          }
        />
        <Button
          title="Anuluj"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "MoodBuddy" }],
            })
          }
        />
      </View>
    </ScrollView>
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
  },
  dateChanger: {
    alignItems: "center",
    marginBottom: 10,
  },
  buttons: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  babka: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default HomeScreen;
