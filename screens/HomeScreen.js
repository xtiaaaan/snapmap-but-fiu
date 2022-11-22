import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import FIUBackground from "../assets/icons/FIU_background.png";
import PanthMap from "../assets/icons/FIU_panthmap.png";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image style={{ height: "120%" }} source={FIUBackground} />
      <Image
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          paddingBottom: "175%",
          position: "absolute",
          resizeMode: "center",
          top: "-70%",
        }}
        source={PanthMap}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.signUpButton}
      >
        <Text style={styles.singupText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          bottom: "45%",
          width: "80%",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={{ color: colors.white, fontSize: 16 }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ bottom: "30%" }}
        onPress={() => navigation.navigate("Debug")}
      >
        <Text>Debug</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.fiuBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    color: colors.lightGrey,
  },
  loginText: {
    color: colors.white,
    fontSize: 20,
  },
  singupText: {
    color: colors.fiuBlue,
    fontSize: 20,
  },
  loginButton: {
    position: "absolute",
    borderRadius: 10,
    bottom: "50%",
    width: "80%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fiuGold,
  },
  signUpButton: {
    position: "absolute",
    borderRadius: 10,
    bottom: "42.5%",
    width: "80%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});
