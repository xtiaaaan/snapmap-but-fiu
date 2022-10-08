import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <Text>LoginScreen</Text>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
