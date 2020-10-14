import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";

import Colors from "../constants/colors";
import colors from "../constants/colors";

export default function FlatButton({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Card style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        
        justifyContent: "center",
        backgroundColor: colors.lightAccent,
        width: 120,
        height: 50
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})