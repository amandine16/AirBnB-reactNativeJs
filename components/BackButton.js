import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../assets/colors";

function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <MaterialIcons name="arrow-back" size={24} color={colors.grey} />
    </TouchableOpacity>
  );
}

export default BackButton;
