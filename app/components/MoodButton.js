import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";

import Colors from "../constants/colors";
import colors from "../constants/colors";

export default function FlatButton({item, onPress, style}){
    return(
        <TouchableOpacity onPress={onPress} >
            <Card style={[styles.button, style]}>
                <Text style={styles.buttonText}>{item.text}</Text>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        
        justifyContent: "center",
        backgroundColor: colors.lightAccent,
        width: 100,
        height: 50,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'center'
    }

});


