import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import DateChanger from '../components/DateChanger';
import MoodSlider from '../components/MoodSlider';
import Colors from '../constants/colors';
import Dates from '../utils/generateDates';
import saveData from '../utils/saveData';
import getData from '../utils/getData';
import { Value } from 'react-native-reanimated';

function HomeScreen({navigation}) {
    const [currentDate, setCurrentDate] = useState(new Date(Date.now()));
    const [mood,setMood] = useState(0);
    const [show,setShow] = useState(false);
    return (
        <View style={styles.screen}>
            <Text style={styles.welcomeText}>
                Jak się masz?
            </Text>
            <MoodSlider onValueChange={(moodValue) => setMood(moodValue)}/>
            <DateChanger date={currentDate} mode="datetime" style={styles.dateChanger}/>
            {/* dane od norberta jako lista => emotions             */}
            <Button title="Zapisz" onPress={() => {saveData("a","c"); setShow(true)}}/>
            {show && <Text style={styles.welcomeText}>
                {console.log(getData("a")["mood"])}
            </Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 20
    },
    welcomeText: {
        fontSize: 28,
        color: Colors.primary,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: 10
    },
    dateChanger: {
        padding: 20
    }
})

export default HomeScreen;