import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

import colors from "../assets/colors";

function Button({ text, setFunction, backgroundColor }) {
  return (
    <TouchableHighlight
      style={backgroundColor ? [styles.btn, styles.bg] : styles.btn}
      underlayColor="#FFBAC0"
      onPress={() => {
        setFunction();
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
}

export default Button;

const styles = StyleSheet.create({
  btn: {
    height: 60,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.pink,
    borderWidth: 3,
    borderRadius: 60,
    marginBottom: 20,
  },
  bg: {
    backgroundColor: colors.lightGrey,
  },
  text: {
    color: colors.grey,
    fontWeight: "500",
    fontSize: 18,
  },
});
