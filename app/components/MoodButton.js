import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";

import Colors from "../constants/colors";
import colors from "../constants/colors";
//import emotionEmojis from "../constants/emotionsEmojis";
import { FontAwesome5 } from "@expo/vector-icons";
//import emotionsEmojis from "../constants/emotionsEmojis";

export default function FlatButton({item, emotionEmojis, onPress, style}){

    const [currentEmoji, setCurrentEmoji] = useState(0);

    return(
        <TouchableOpacity onPress={onPress} >
            <Card style={[styles.button, styles.emotionEmojis, style]}>
                <FontAwesome5 name={emotionEmojis} size={24} color="black" style={styles.emotionEmojis} />
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
    },
    FontAwesome5:{
        alignSelf: "center",
    },
    emotionEmojis: {
        alignSelf: "center",
    }

});


