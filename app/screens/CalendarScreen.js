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

var dateList = [];

function CalendarScreen(props) {
    

    const [myMarkedDates, setMarkedDates] = useState({
        '2020-10-16': {selected: true, marked: true, selectedColor: 'blue'}})


    function MarkDay(day)
    {
        // var key = day.dateString;
        // var json = { };
        // myMarkedDates[key] = {selected: true, marked: true, selectedColor: 'blue'}
        // setMarkedDates((currentMarkedDates) => currentMarkedDates[key] = {selected: true, marked: true, selectedColor: 'blue'})

        // var key2 = "2020-10-10";
        // json[key2] = {selected: true, marked: true, selectedColor: 'blue'}
    }

    return (
        <View>
            <CalendarList
                onDayPress={(day) => {MarkDay(day)}}
                firstDay={1}
                horizontal={true}
                pagingEnabled={true}
                pastScrollRange={1000}
                futureScrollRange={1000}
                markedDates={myMarkedDates}
            />
        </View>
      );
}

const styles = StyleSheet.create({

});

export default CalendarScreen;
