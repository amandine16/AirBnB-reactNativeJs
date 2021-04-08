import React from "react";
import { StyleSheet, TextInput } from "react-native";

import colors from "../assets/colors";

function Input({
  setFunction,
  keyboardType,
  secureTextEntry,
  placeholder,
  value,
  setNewInformations,
  setDisplayMessage,
  setIsInfosModified,
}) {
  return (
    <TextInput
      style={styles.textInput}
      keyboardType={keyboardType ? keyboardType : "default"}
      secureTextEntry={secureTextEntry ? true : false}
      placeholder={placeholder}
      autoCapitalize="none"
      textContentType="none"
      value={value && value}
      onChangeText={(text) => {
        setFunction(text);
        if (setNewInformations) {
          setNewInformations(true);
        }
        if (setDisplayMessage) {
          setDisplayMessage(false);
        }
        if (setIsInfosModified) {
          setIsInfosModified(true);
        }
      }}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    borderBottomColor: colors.lightPink,
    borderBottomWidth: 2,
    width: "80%",
    marginBottom: 30,
    fontSize: 16,
  },
});
