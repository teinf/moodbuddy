import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image} from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";

import getAllData from "../utils/getAllData";

import MoodNames from "../constants/moodNames";
import MoodColors from "../constants/moodColors";
import Card from "../components/Card";
import Colors from "../constants/colors";

const screenWidth = Dimensions.get("window").width;

function daysAgo(date, days) {
  var pastDate = date.getDate() - days-1;
  var newDate = new Date(date);
  newDate.setDate(pastDate);
  newDate.setHours(0,0,0,0);
  return newDate;
}

export default class StatisticsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pieChartData: [],
      averageMood: 0,
      lastWeek: [],
      lastMonth:[]
    };

    this.pieChartConfig = {
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    };

  }

  async componentDidMount() {

    const daysData = await getAllData();
    this.setState({
      data: daysData,
      pieChartData: this.generatePieChartData(daysData)
    })

    var totalMood = 0;
    var daysDataLength = 0;

    for (var key in daysData) {
      totalMood += daysData[key].mood;
      daysDataLength++;
    }

    this.setState({
      averageMood: Math.round(totalMood/daysDataLength)
    })


    var lastWeek = []
    var lastWeekStartingDate = daysAgo(new Date(Date.now()), 7);
    for(var key in daysData) {
      if(+key >= lastWeekStartingDate && +key <= Date.now()) {
        lastWeek.push(daysData[key])
      }
    }
    this.setState({
      lastWeek: this.generatePieChartData(lastWeek)
    })
    var lastMonth = []
    var lastMonthStartingDate = daysAgo(new Date(Date.now()), 30);
    for(var key in daysData) {
      if(+key >= lastMonthStartingDate && +key <= Date.now()) {
        lastMonth.push(daysData[key])
      }
    }
    this.setState({
      lastMonth: this.generatePieChartData(lastMonth)
    })


  }

  generatePieChartData(daysData) {
    let moodCounter = [0, 0, 0, 0, 0];

    for (var key in daysData) {
      moodCounter[daysData[key]["mood"]]++;
    }

    var data = [];

    for (var i = 0; i < moodCounter.length; i++) {
      var chartData = {};
      chartData["name"] = MoodNames[i];
      chartData["amount"] = moodCounter[i];
      chartData["color"] = MoodColors[i];
      chartData["legendFontColor"] = MoodColors[i];
      chartData["legendFontSize"] = 15;

      data.push(chartData);
    }

    return data;
  }

  render() {
    return (
      <ScrollView style={styles.main}>
        <Image source={require("../assets/statystyki.png")} style={{ width: 200, height: 200, alignSelf: "center", resizeMode: "contain"}}/>
        <Card style={styles.margin}>
          
          <Text style={styles.title}>Ten tydzień</Text>
        <PieChart
          data={this.state.lastWeek}
          width={screenWidth-5}
          height={200}
          chartConfig={this.pieChartConfig}
          accessor="amount"
          backgroundColor="transparent"
        />
        </Card>
        <Card style={styles.margin}>
          
          <Text style={styles.title}>Ostatnie 30 dni</Text>
        <PieChart
          data={this.state.lastMonth}
          width={screenWidth-5}
          height={200}
          chartConfig={this.pieChartConfig}
          accessor="amount"
          backgroundColor="transparent"
        />
        </Card>
        <Card style={styles.margin}>
        <Text style={styles.title}>Podsumowanie</Text>
        <PieChart
          data={this.state.pieChartData}
          width={screenWidth-5}
          height={200}
          chartConfig={this.pieChartConfig}
          accessor="amount"
          backgroundColor="transparent"
        />
        </Card>
        <Card style={styles.margin}>
        <Text style={styles.text}>Twój średni humor to : <Text style={{color: MoodColors[this.state.averageMood]}}>{MoodNames[this.state.averageMood]}</Text></Text>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    marginVertical: 10
  },
  text:{
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    color: Colors.primary
  },
  title:{
    textAlign: "center",
    marginTop: 10,
    padding: 20,
    fontSize: 25,
    color: Colors.primary
  },
  margin:{
    marginVertical: 10,
    backgroundColor: Colors.light
  }
});
