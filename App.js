import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import MoodSlider from './app/components/MoodSlider';

import ExampleScreen from './app/screens/ExampleScreen';
import MoodScreen from './app/screens/MoodScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import FlatButton from './app/components/MoodButton';
import ChartScreen from './app/screens/ChartScreen';

export default function App() {
  
  return (
    <View>
    <StatusBar barStyle="dark-content"></StatusBar>
    <View style={styles.container}>
      <ChartScreen/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginVertical: 100,
    alignSelf: "center"
  },
});
