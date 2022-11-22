import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { GOOGLE_MAPS_APIKEY } from "@env";
import Map from "../components/Map";
import MapView from "react-native-maps";
import colors from "../constants/colors";

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TouchableOpacity onPress={() => navigation.navigate("Debug")}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Map />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
