import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import Colors from "../constants/colors";

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pl'] = {
  monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  monthNamesShort: ['Sty.','Luty','Mar.','Kw.','Maj','Cze.','Lip.','Sier.','Wrz.','Paź.','Lis.','Gr.'],
  dayNames: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
  dayNamesShort: ['Nd.','Pn.','Wt.','Śr.','Czw.','Pt.','Sb.'],
  today: 'Dzisiaj\'Dziś' //???
};
LocaleConfig.defaultLocale = 'pl';

function CalendarScreen(props) {
    return (
        <View>
          <CalendarList></CalendarList>
        </View>
      );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 34,
    color: Colors.primary,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default CalendarScreen;
