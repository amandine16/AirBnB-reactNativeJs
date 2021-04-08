import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../assets/colors";

function LargeInput({ setFunction, placeholder, value, setIsInfosModified }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      maxLength={250}
      multiline={true}
      numberOfLines={10}
      value={value}
      onChangeText={(text) => {
        setFunction(text);
        if (setIsInfosModified) {
          setIsInfosModified(true);
        }
      }}
    />
  );
}

export default LargeInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.lightPink,
    borderWidth: 2,
    width: "80%",
    marginBottom: 30,
    marginTop: 15,
    fontSize: 16,
    height: 100,
    padding: 10,
  },
});
