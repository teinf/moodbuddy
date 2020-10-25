import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Colors from "../constants/colors";
import Card from "./Card";
import MoodSlider from "../components/MoodSlider";
import ComplimentesBad from "../constants/complimentsBad";
import ComplimentesGood from "../constants/complimentsGood";

export default function ComplimentAlert(mood){
    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      function getRandomCompliment(arr) {
        return arr[randint(0, arr.length - 1)];
      }
    
    if(mood < 3 ){
        Alert.alert('Komplement na dziś',getRandomCompliment(ComplimentesBad),[{text: 'Ok', onPress:() =>('')}]);
      }
      else{ 
        Alert.alert('Komplement na dziś',getRandomCompliment(ComplimentesGood),[{text: 'Ok', onPress:() =>('')}]);
      }
}