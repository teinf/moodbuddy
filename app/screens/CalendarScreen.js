import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet, Alert } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import Colors from "../constants/colors";

import { LocaleConfig } from "react-native-calendars";
import MoodColors from "../constants/moodColors";
import MoodNames from "../constants/moodNames";
import getAllData from "../utils/getAllData";
import Emotions from "../constants/emotions";
import AsyncStorage from "@react-native-community/async-storage";

LocaleConfig.locales["pl"] = {
  monthNames: [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ],
  monthNamesShort: [
    "Sty.",
    "Luty",
    "Mar.",
    "Kw.",
    "Maj",
    "Cze.",
    "Lip.",
    "Sier.",
    "Wrz.",
    "Paź.",
    "Lis.",
    "Gr.",
  ],
  dayNames: [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ],
  dayNamesShort: ["Nd.", "Pn.", "Wt.", "Śr.", "Czw.", "Pt.", "Sb."],
  today: "Dzisiaj'Dziś",
};
LocaleConfig.defaultLocale = "pl";

export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      myMarkedDates: {},
    };
  }

  async componentDidMount() {
    const daysData = await getAllData();

    this.setState({
      data: daysData,
    });

    this.loadElementsFromFile();
  }

  loadElementsFromFile() {
    var daty = {};

    for (var timestamp in this.state.data) {
      var nowaData = {};

      var key = this.convertTimestampToKey(parseInt(timestamp));

      var mood = this.state.data[timestamp]["mood"];
      var emotions = this.state.data[timestamp]["emotions"];
      var color = MoodColors[mood];

      nowaData[key] = {
        selected: true,
        marked: true,
        selectedColor: color,
        mood: mood,
        emotions: emotions,
      };

      daty = { ...daty, ...nowaData };
    }

    this.setState({
      myMarkedDates: daty,
    });
  }

  openAlert(day) {
    const dwieGodziny = 7200000;
    var timestamp = (day.timestamp - dwieGodziny).toString();
    if (!this.state.data.hasOwnProperty(timestamp)) return;

    // if(!daty.hasOwnProperty(d)) return;

    var mood = MoodNames[this.state.data[timestamp]["mood"]];
    var emotions = this.state.data[timestamp]["emotions"];
    var emotionsString = emotions.map(v => Emotions[v]).join(", ");

    if (emotionsString == "") {
      Alert.alert(mood, "Nie podano żadnych Emocji...", [
        { text: "Ok", onPress: () => "" },
      ]);
    } else {
      Alert.alert(mood, "Twoje Emocje to: " + emotionsString, [
        { text: "Ok", onPress: () => "" },
      ]);
    }
  }

  render() {
    return (
      <CalendarList
        renderDay={(day, item) => {
          return <View />;
        }}
        // onVisibleMonthsChange={() => {loadElementsFromFile()}}
        onDayPress={(day) => {
          this.openAlert(day);
        }}
        // onDayLongPress={(day) => {console.log('selected day', day)}}
        firstDay={1}
        hideArrows={false}
        horizontal={true}
        pagingEnabled={true}
        pastScrollRange={10}
        futureScrollRange={10}
        markedDates={this.state.myMarkedDates}

        // items={{
        //     '2020-10-22': [{name: 'item 1 - any js object'}],
        //     '2020-10-23': [{name: 'item 2 - any js object', height: 80}],
        //     '2020-10-24': [],
        //     '2020-10-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
        //   }}
        //   //loadItemsForMonth={(month) => {console.log('trigger items loading')}}
        //   //renderDay={(day, item) => {return (<View />);}}
      />
    );
  }

  convertTimestampToKey(timestamp) {
    var date = new Date(timestamp);

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (day < 10) {
      day = "0" + String(day);
    }
    if (month < 10) {
      month = "0" + String(month);
    }

    var key = year + "-" + month + "-" + day;
    return key;
  }
}
