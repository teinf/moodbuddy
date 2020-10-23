import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import DateChanger from '../components/DateChanger';
import MoodSlider from '../components/MoodSlider';
import Colors from '../constants/colors';

function HomeScreen({navigation}) {
    const [currentDate, setCurrentDate] = useState(new Date(Date.now()));

    return (
        <View style={styles.screen}>
            <Text style={styles.welcomeText}>
                Jak się masz?
            </Text>
            <MoodSlider onValueChange={(value) => null}/>
            <DateChanger date={currentDate} mode="datetime" style={styles.dateChanger}/>
            <Button title="Zapisz"/>
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