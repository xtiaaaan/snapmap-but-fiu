import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 25.7574,
        longitude: -80.3733,
        latitudeDelta: 0.023,
        longitudeDelta: 0.0105,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
