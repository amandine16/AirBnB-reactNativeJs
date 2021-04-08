import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import colors from "../assets/colors";

const displayStars = (number) => {
  let tab = [];

  for (let i = 1; i <= 5; i++) {
    if (number < i) {
      tab.push(
        <Entypo
          name="star"
          size={20}
          color="#BBBBBB"
          style={{ marginRight: 4 }}
          key={i}
        />
      );
    } else {
      tab.push(
        <Entypo
          name="star"
          size={20}
          color="#FFB100"
          style={{ marginRight: 4 }}
          key={i}
        />
      );
    }
  }

  return tab;
};

function Informations({ title, ratingValue, reviews, photo }) {
  return (
    <View style={styles.informations}>
      <View style={styles.texts}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.rating}>
          {displayStars(ratingValue)}
          <Text style={styles.ratingText}>{reviews} reviews</Text>
        </View>
      </View>

      <View style={styles.imageView}>
        <Image
          source={{
            uri: photo,
          }}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
}

export default Informations;

const styles = StyleSheet.create({
  informations: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  texts: {
    height: 80,
    flex: 1,
    paddingRight: 10,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageView: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  ratingText: {
    color: colors.mediumGrey,
  },
});
