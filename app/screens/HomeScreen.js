import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import MoodSlider from '../components/MoodSlider';
import Colors from '../constants/colors';

function HomeScreen({navigation}) {
    return (
        <View style={styles.screen}>
            <Text style={styles.welcomeText}>
                Jak się masz?
            </Text>
            <MoodSlider onValueChange={(value) => null}/>
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
    }
})

export default HomeScreen;