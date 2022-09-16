import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import colors from "../constants/colors.js";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.header}>This is the HOME SCREEN</Text>
      <Text style={styles.header}>PANTHER SNAP</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.fiuBlue,
  },
  header: {
    color: colors.lightGrey,
  },
});
