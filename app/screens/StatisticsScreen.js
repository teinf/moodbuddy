import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";

import generateDates from "../utils/generateDates";

import MoodNames from "../constants/moodNames";
import MoodColors from "../constants/moodColors";
import getAllData from "../utils/getAllData";

const screenWidth = Dimensions.get("window").width;

function StatisticsScreen({ navigation }) {
  const pieChartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };
  
  const baza = generateDates();

  function generatePieChartData() {
    let moodCounter = [0,0,0,0,0];

    for(var key in baza) {
      moodCounter[baza[key]["mood"]]++;
    }
  
    var data = []
  
    for(var i=0; i<moodCounter.length; i++) {
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
  
  const data = generatePieChartData();
  console.log(data)

  return (
    <View style={styles.main}>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={pieChartConfig}
        accessor="amount"
        backgroundColor="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
  },
});

export default StatisticsScreen;
