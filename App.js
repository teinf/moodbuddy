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

const Stack = createStackNavigator();

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
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={DeveloperScreen}
            options={headerOptions}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
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
