import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>SignupScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
