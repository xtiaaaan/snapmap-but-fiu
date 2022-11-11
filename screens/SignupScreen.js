import { SafeAreaView, StyleSheet, Text, View, Button} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>SignupScreen</Text>
      <TouchableOpacity style = {styles.cancelbutton} 
      onPress={() => navigation.navigate("Home")}>
        <Text>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.signupbutton} 
      onPress={() => navigation.navigate("Home")}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  cancelbutton: {
    alignItems: "center",
    backgroundColor: "#f08080",
    padding: 10
  },
  signupbutton: {
    alignItems: "center",
    backgroundColor: "#87cefa",
    padding: 10
  }
});
