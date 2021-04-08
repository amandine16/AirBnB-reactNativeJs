import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import colors from "../assets/colors";
import MapView from "react-native-maps";

// Components
import Informations from "../components/Informations";
import PriceView from "../components/PriceView";

// Dimensions
const windowHeight = Dimensions.get("window").height;

function RoomScreen({ route }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [displayAllText, setDisplayAllText] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:3000/rooms/${route.params.id}`
          `https://express-airbnb-api.herokuapp.com/rooms/${route.params.id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator
      color={colors.pink}
      size="large"
      style={styles.activityIndicator}
    />
  ) : (
    <ScrollView style={styles.scrollView}>
      <View style={styles.relative}>
        <View style={styles.bgImage}>
          <Image
            source={{
              uri: data.photos[0].url,
            }}
            style={styles.bgImage}
            resizeMode="cover"
          ></Image>
        </View>

        <View style={styles.absolute}>
          <PriceView price={data.price} />
        </View>
      </View>

      <View style={styles.margin}>
        <Informations
          title={data.title}
          photo={data.user.account.photo.url}
          reviews={data.reviews}
        />
      </View>

      <TouchableOpacity
        style={styles.description}
        onPress={() => {
          setDisplayAllText(!displayAllText);
        }}
      >
        <Text
          numberOfLines={displayAllText === false ? 3 : null}
          style={styles.description}
        >
          {data.description}
        </Text>
      </TouchableOpacity>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: data.location[1],
          longitude: data.location[0],
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: data.location[1],
            longitude: data.location[0],
          }}
          title={data.title}
        />
      </MapView>
    </ScrollView>
  );
}

export default RoomScreen;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  activityIndicator: { paddingTop: 20 },
  scrollView: {
    backgroundColor: colors.bgColor,
  },
  bgImage: {
    height: windowHeight / 3,
    width,
    backgroundColor: "red",
  },
  relative: {
    position: "relative",
  },
  absolute: {
    position: "absolute",
    bottom: 0,
  },
  description: {
    marginHorizontal: 10,
    lineHeight: 20,
    marginBottom: 10,
  },
  margin: {
    marginHorizontal: 20,
  },
  map: {
    height: 300,
    width: "100%",
  },
});
