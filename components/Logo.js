import React from "react";
import { Image, StyleSheet } from "react-native";

function Logo({ size }) {
  return (
    <Image
      source={require("../assets/logo.png")}
      style={size === "large" ? styles.largeLogo : styles.smallLogo}
      resizeMode={"contain"}
    />
  );
}

export default Logo;

const styles = StyleSheet.create({
  largeLogo: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginBottom: 30,
  },
  smallLogo: {
    height: 30,
    width: 30,
  },
});
