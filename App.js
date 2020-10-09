import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ExampleScreen from './app/screens/ExampleScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Witam Serdeczne React Native JD</Text>
      <ExampleScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
