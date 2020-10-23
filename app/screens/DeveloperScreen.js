import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

function DeveloperScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go to Statistics" onPress={() => navigation.navigate('Statystyki')} />
            <Button title="Go to Calendar" onPress={() => navigation.navigate('Kalendarz')} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: "center",
        justifyContent: "space-evenly"
    }
})

export default DeveloperScreen;