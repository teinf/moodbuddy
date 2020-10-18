import React from 'react';
import { StyleSheet, View } from 'react-native';
import MoodSlider from './app/components/MoodSlider';

import ExampleScreen from './app/screens/ExampleScreen';
import MoodScreen from './app/screens/MoodScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import FlatButton from './app/components/MoodButton';

export default function App() {
  
  return (
    <View style={styles.container}>
      <MoodSlider></MoodSlider>
      <MoodScreen></MoodScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginVertical: 100
  },
});
