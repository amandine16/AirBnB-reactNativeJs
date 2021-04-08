import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../assets/colors";

function RedirectButton({ text, screen }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.btn}
      onPress={() => {
        navigation.navigate(screen);
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default RedirectButton;

const styles = StyleSheet.create({
  btn: {
    marginBottom: 20,
  },
  text: {
    color: colors.grey,
  },
});
