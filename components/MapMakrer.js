import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

// const data = [
//     {
//         location:{
//             lattitude: ,
//             longititude: ,
//         }
//     }
// ]

const MapMakrer = () => {
  return (
    <Marker
      coordinate={{
        lattitude: data.location.lattitude,
        longititude: data.location.longititude,
      }}
      title=""
    />
  );
};

export default MapMakrer;

const styles = StyleSheet.create({});
