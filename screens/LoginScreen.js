import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { firebase } from "../firebase.js";
import FIUPanther from "../assets/icons/FIU_panther.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import FIUBackground from "../assets/icons/FIU_background.png";
import PanthMap from "../assets/icons/FIU_panthmap.png";
import { addListener } from "@reduxjs/toolkit";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }

    navigation.navigate("MainMenu");
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image style={{ height: "120%" }} source={FIUBackground} />
      <Image
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          resizeMode: "center",
          top: "-20%",
        }}
        source={PanthMap}
      />
      <View style={styles.modalView}>
        <View
          style={{
            alignSelf: "center",
            top: "1%",
            width: "95%",
            height: "7.5%",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
            }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name={"arrowleft"} size={20} color={colors.fiuBlue} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Log In</Text>
          <Image
            style={styles.pantherIcon}
            resizeMode="contain"
            source={FIUPanther}
          />
        </View>
        <View style={{ alignItems: "center", paddingTop: "5%" }}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="FIU Email"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity
            onPress={() => loginUser(email, password)}
            style={styles.loginButton}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={{ color: colors.fiuBlue }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupBox}>
          <View>
            <Text style={{ color: "grey", fontSize: 14 }}>
              Don't have an account?
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: colors.fiuBlue, fontSize: 14 }}>
              {" "}
              Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.fiuBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingTop: "2.5%",
    height: "70%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  pantherIcon: {
    flex: 1,
    right: 0,
    width: "100%",
    height: "100%",
  },
  inputView: {
    backgroundColor: "#f0f8ff",
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 26,
    color: colors.fiuBlue,
    alignSelf: "center",
    paddingLeft: "5%",
    paddingRight: "45%",
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 18,
    color: colors.darkGrey,
    height: 50,
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  signupBox: {
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: "10%",
  },
  loginButton: {
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    width: "80%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fiuBlue,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});
