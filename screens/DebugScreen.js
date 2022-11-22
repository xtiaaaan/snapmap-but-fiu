import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const DebugScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>DebugScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <Text>Camera Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MainMenu")}>
        <Text>Main Manu Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DebugScreen;

const styles = StyleSheet.create({});
