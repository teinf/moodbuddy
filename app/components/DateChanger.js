import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Card from "./Card";

import DateTimePickerModal from "react-native-modal-datetime-picker";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [day, month, year].join("-");
}

function DateChanger({ date }) {
  const [currentDate, setCurrentDate] = useState(date);
  const [showPicker, setShowPicker] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.container}>
          <Text style={styles.dateText}>{formatDate(currentDate)}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showPicker}
        date={currentDate}
        mode="date"
        onConfirm={(value) => {setCurrentDate(value); setShowPicker(false)}}
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
    textDecorationLine: "underline",
  },
  container: {
    marginTop: 20
  }
});

export default DateChanger;
