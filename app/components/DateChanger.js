import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Card from "./Card";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from "../constants/colors"
import { FontAwesome } from '@expo/vector-icons'; 

function DateChanger({ date, mode="datetime", onDateChange=function(date) {}, style }) {
  const [currentDate, setCurrentDate] = useState(date);
  const [showPicker, setShowPicker] = useState(false);

  function formatDate(date) {
    var d = new Date(date)
    if(mode == "date")
    {
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
    }
    else {
      var options = { year: 'numeric', month: '2-digit', day: 'numeric', hour: "2-digit", minute: "2-digit" };
    }
    return d.toLocaleDateString("pl-PL", options)
  }

  function onDateConfirm(value) {
    setCurrentDate(value);
    setShowPicker(false)
    onDateChange(value)
  }

  return (
    <View style={style}>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.dateText}>{formatDate(currentDate)}</Text>
          <FontAwesome name="calendar" size={18} color="black" />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showPicker}
        date={currentDate}
        mode={mode}
        onConfirm={(value) => onDateConfirm(value)}
        onCancel={() => setShowPicker(false)}
        cancelTextIOS="Anuluj"
        confirmTextIOS="Zmień datę"
        headerTextIOS="Wybierz nową datę"
        isDarkModeEnabled={false}
        locale="pl_PL"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dateText: {
    borderRightColor: Colors.dark,
    borderRightWidth: 2,
    marginRight: 5,
    textAlign: "center"
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
    padding: 10,

    // backgroundColor: Colors.light
  }
});

export default DateChanger;
