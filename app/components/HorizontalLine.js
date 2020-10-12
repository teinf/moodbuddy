import React from "react";
import { View } from "react-native";

function HorizontalLine({
  width = "100%",
  height = 1,
  color = "rgba(0,0,0,0.6)",
  style,
}) {
  return (
    <View
      style={[
        {
          borderBottomColor: color,
          borderBottomWidth: height,
          width: width,
        },
        ,
        style,
      ]}
    ></View>
  );
}

export default HorizontalLine;
