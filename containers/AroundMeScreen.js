import React, { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import colors from "../assets/colors";

function AroundMeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getLocationAndData = async () => {
      try {
        let { status } = await Location.requestPermissionsAsync();

        let response;

        if (status === "granted") {
          // get rooms around
          const location = await Location.getCurrentPositionAsync();

          const lat = location.coords.latitude;
          const lng = location.coords.longitude;

          response = await axios.get(
            `https://express-airbnb-api.herokuapp.com/rooms/around?latitude=${lat}&longitude=${lng}`
            // `http://localhost:3000/rooms/around?latitude=${lat}&longitude=${lng}`
          );
        } else {
          // get all rooms
          response = await axios.get(
            `https://express-airbnb-api.herokuapp.com/rooms/around`
            // `http://localhost:3000/rooms/around`
          );
        }

        const coordsTab = [];
        for (let i = 0; i < response.data.length; i++) {
          coordsTab.push({
            latitude: response.data[i].location[1],
            longitude: response.data[i].location[0],
            id: response.data[i]._id,
          });
        }

        setData(coordsTab);
        setIsLoading(false);
      } catch (error) {
        alert("An error occurred");
      }
    };

    getLocationAndData();
  }, []);

  return isLoading ? (
    <ActivityIndicator
      color={colors.pink}
      size="large"
      style={styles.activityIndicator}
    />
  ) : (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 48.856614,
        longitude: 2.3522219,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}
      showsUserLocation={true}
    >
      {data.map((item, index) => {
        return (
          <MapView.Marker
            key={index}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
          ></MapView.Marker>
        );
      })}
    </MapView>
  );
}

export default AroundMeScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
