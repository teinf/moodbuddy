import React from "react";
import { Text, View} from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";
  import Colors from "../constants/colors";

function ChartScreen(props){
    return(
        <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
            data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
                }
            ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={300}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: Colors.darkAccent,
                backgroundGradientFrom: Colors.darkAccent,
                backgroundGradientTo: Colors.lightAccent,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: Colors.primary
                }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
        </View>
    )
}
export default ChartScreen;