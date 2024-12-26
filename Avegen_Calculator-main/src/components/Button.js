import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

export default function Button({ title, onPress, isBlue, isGray, isGreen }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isGreen
          ? Styles.btnGreen
          : isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : Styles.btnLight
      }
    >
      <Text
        style={
          isGreen || isBlue || isGray
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
