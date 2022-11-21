import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import FIUVert from "../assets/icons/FIU_vrt.png";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.text}>This is the login screen</Text>
      <Image style={{ alignSelf: "center" }} source={FIUVert} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.loginButton}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.signUpButton}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.fiuBlue,
  },
  text: {
    alignSelf: "center",
    color: colors.lightGrey,
  },
  buttonText: {
    color: colors.lightGrey,
    fontSize: 26,
  },
  loginButton: {
    position: "absolute",
    bottom: "15%",
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fiuGold,
  },
  signUpButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkGrey,
  },
});
