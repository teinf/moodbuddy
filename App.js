import React from 'react';
import { StyleSheet, View } from 'react-native';
import MoodSlider from './app/components/MoodSlider';


export default function App() {
  return (
    <View style={styles.container}>
      <MoodSlider></MoodSlider>
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
