import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/components/Card';

import ExampleScreen from './app/screens/ExampleScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import FlatButton from './app/components/MoodButton';

export default function App() {
  return (
    <View style={styles.container}>
      <ExampleScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 100
  },
});
