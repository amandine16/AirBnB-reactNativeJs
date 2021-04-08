import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../assets/colors";

function ScreenTitle({ title }) {
  return <Text style={styles.text}>{title}</Text>;
}

export default ScreenTitle;

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 30,
  },
});
