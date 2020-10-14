import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ExampleScreen from './app/screens/ExampleScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ExampleScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 50
  },
});
