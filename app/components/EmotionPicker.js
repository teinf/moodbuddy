import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Colors from "../constants/colors";
import Emotions from "../constants/emotions";
import EmotionsEmojis from "../constants/emotionsEmojis";
import MoodColors from "../constants/moodColors";
import EmotionButton from "./EmotionButton";

export default class EmotionPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emotions: Array.from({ length: 18 }, (x, i) => i).map((x) => {
        return {
          key: x,
          text: Emotions[x],
          emoji: EmotionsEmojis[x],
          picked: false,
          selectedClass: styles.notPressed
        };
      }),
      pickedItems: [],
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <FlatList
          data={this.state.emotions}
          renderItem={({ item }) => (
            <EmotionButton
              item={item}
              style={[styles.emotionButton, item.selectedClass]}
              onPress={() => {
                item.picked = !item.picked;
                item.selectedClass = item.picked? styles.pressed: styles.notPressed;
                this.setState({
                  pickedItems: this.state.emotions.filter((v) => v.picked == true).map(v => v.key),
                });

                if(item.picked) {
                    this.props.onValueChange([...this.state.pickedItems, item.key])
                }
                else {
                    this.props.onValueChange(this.state.pickedItems.filter(v => v !== item.key))
                }
              }}
            />
          )}
          numColumns={2}
          extraData={this.state}
          ListFooterComponent={this.props.ListFooterComponent}
          ListHeaderComponent={this.props.ListHeaderComponent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  emotionButton: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  pressed: {
      backgroundColor: MoodColors[4]
  },
  notPressed: {
      backgroundColor: Colors.primary
  },
});
