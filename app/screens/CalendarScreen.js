import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import Colors from "../constants/colors";

import {LocaleConfig} from 'react-native-calendars';
import MoodColors from "../constants/moodColors";
import MoodNames from "../constants/moodNames";
import getAllData from "../utils/getAllData";

LocaleConfig.locales['pl'] = {
  monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  monthNamesShort: ['Sty.','Luty','Mar.','Kw.','Maj','Cze.','Lip.','Sier.','Wrz.','Paź.','Lis.','Gr.'],
  dayNames: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
  dayNamesShort: ['Nd.','Pn.','Wt.','Śr.','Czw.','Pt.','Sb.'],
  today: 'Dzisiaj\'Dziś'
};
LocaleConfig.defaultLocale = 'pl';



export default class CalendarScreen extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            data: [],
            myMarkedDates: []
          };
    }

    async componentDidMount() {

        const daysData = await getAllData();

        this.setState({
          data: daysData,
        })

        this.loadElementsFromFile();
    }

    
    loadElementsFromFile()
    {
        var daty = {};
        
        for (var timestamp in this.state.data)
        {
            var nowaData = { };
            
            var key = this.convertTimestampToKey(parseInt(timestamp));
            // console.log(key);

            var mood = this.state.data[timestamp]["mood"];
            var color = MoodColors[mood];

            // for (var mood in baza[timestamp])
            // {
            //     console.log(mood);
            // }

            nowaData[key] = {selected: true, marked: true, selectedColor: color};

            // if(!baza.hasOwnProperty(key))
            // {
            //     //console.log(baza[timestamp]);
                
            //     //nowaData[key] = {selected: true, marked: true, selectedColor: color, timestamp: timestamp};
            // }
            // else
            // {
            //     // TO-DO
            //     // nowaData[key] = {...nowaData[key], selected: true, marked: true, selectedColor: color, timestamp: timestamp}
            // }
            
            daty = {...daty, ...nowaData};
        }

        this.setState({
            myMarkedDates: daty
        })
    }
    
    // function openDayView(day)
    // {

    // }

    render()
    {
        return (
            <View>
                <CalendarList
                    // renderDay={(day, item) => {return (<View />);}}
                    // onVisibleMonthsChange={() => {loadElementsFromFile()}}
                    // onDayPress={(day) => {openDayView(day)}}
                    onDayLongPress={(day) => {console.log('selected day', day)}}
                    firstDay={1}
                    hideArrows={false}
                    horizontal={true}
                    pagingEnabled={true}
                    pastScrollRange={10}
                    futureScrollRange={10}
                    markedDates={this.state.myMarkedDates}
                />
            </View>
        );
    }
    
    
    convertTimestampToKey(timestamp)
    {
        var date = new Date(timestamp);
    
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        
        if (day < 10) {day = "0" + String(day)};
        if (month < 10) {month = "0" + String(month)};
    
        var key = year + "-" + month + "-" + day;
        return key;
    }
}
