import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { getAuth } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {};

  return <SafeAreaView style={styles.safeAreaView}></SafeAreaView>;
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.fiuBlue,
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#f0f8ff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: colors.lightGrey,
  },

  loginBtn: {
    position: "absolute",
    bottom: "15%",
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fiuGold,
  },

  goBackBtn: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkGrey,
  },
  buttonText: {
    color: colors.lightGrey,
    fontSize: 26,
  },
});
