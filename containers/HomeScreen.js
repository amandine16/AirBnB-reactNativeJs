import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import colors from "../assets/colors";

// Components
import PriceView from "../components/PriceView";
import Informations from "../components/Informations";
import { ActivityIndicator } from "react-native";

function HomeScreen({ navigation }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:3000/rooms"
          `https://express-airbnb-api.herokuapp.com/rooms`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("An error occurred");
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />

      {isLoading ? (
        <ActivityIndicator size="large" color={colors.pink} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={
                  index === data.length - 1
                    ? styles.container
                    : [styles.container, styles.border]
                }
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate("Room1", { id: item._id });
                }}
              >
                <ImageBackground
                  source={{ uri: item.photos[0].url }}
                  style={styles.bgImage}
                >
                  <PriceView price={item.price} />
                </ImageBackground>

                <Informations
                  title={item.title}
                  ratingValue={item.ratingValue}
                  reviews={item.reviews}
                  photo={item.user.account.photo.url}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item._id}
          style={styles.flatList}
        />
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  activityIndicator: { paddingTop: 20 },
  flatList: { backgroundColor: colors.bgColor },
  container: {
    height: 300,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  border: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  icon: {
    marginRight: 5,
  },
});
