import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../assets/colors";

function Message({ message, color }) {
  return (
    <View style={styles.errorView}>
      {message !== null && (
        <Text
          style={
            color === "success"
              ? styles.successText
              : color === "error"
              ? styles.errorText
              : null
          }
        >
          {message}
        </Text>
      )}
    </View>
  );
}

export default Message;

const styles = StyleSheet.create({
  errorView: {
    height: 30,
  },
  errorText: {
    color: colors.pink,
  },
  successText: {
    color: colors.grey,
  },
});
