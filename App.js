import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "./app/constants/colors";

import HomeScreen from "./app/screens/HomeScreen";
import StatisticsScreen from "./app/screens/StatisticsScreen";
import CalendarScreen from "./app/screens/CalendarScreen";
import DeveloperScreen from "./app/screens/DeveloperScreen";
import generateDates from "./app/utils/generateDates"
import SaveDayScreen from "./app/screens/SaveDayScreen";
import DashboardScreen from "./app/screens/DashboardScreen";

const Stack = createStackNavigator();

// console.log(generateDates())

function App() {
  const headerOptions = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MoodBuddy">
          <Stack.Screen
            name="MoodBuddy"
            component={DashboardScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Jak się masz?"
            component={HomeScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Emocje"
            component={SaveDayScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Statystyki"
            component={StatisticsScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Kalendarz"
            component={CalendarScreen}
            options={headerOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
