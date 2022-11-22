import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../constants/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import FIUPanther from "../assets/icons/FIU_panther.png";
import { Input, registerCustomIconType } from "@rneui/themed";
import { firebase } from "../firebase";

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const registerUser = async (email, password, fullName) => {
    if (password != verifyPassword) {
      alert("Passwords do not match");
      return;
    }

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://snapmap-but-fiu.firebaseapp.com",
          })
          .then(() => {
            alert("Verification email sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.id)
              .set({
                fullName,
                email,
              });
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            setFullName("");
            setEmail("");
            setPassword("");
            setVerifyPassword("");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            navigation.navigate("Login");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
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
            alignSelf: "center",
            paddingLeft: "2.5%",
            paddingRight: "2.5%",
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name={"arrowleft"} size={20} color={colors.fiuBlue} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign Up</Text>
        <Image
          style={styles.pantherIcon}
          resizeMode="contain"
          source={FIUPanther}
        />
      </View>
      <View style={styles.signupBox}>
        <Input
          onChangeText={(fullName) => setFullName(fullName)}
          placeholder="Full Name"
          leftIcon={{ type: "font-awesome", name: "user", color: "grey" }}
        />
        <Input
          onChangeText={(email) => setEmail(email)}
          placeholder="Email Address"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon={{ type: "font-awesome", name: "at", color: "grey" }}
        />
        <Input
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon={{ type: "font-awesome", name: "lock", color: "grey" }}
          secureTextEntry={true}
        />
        <Input
          onChangeText={(verifyPassword) => setVerifyPassword(verifyPassword)}
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "grey",
          }}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => registerUser(email, password, fullName)}
        style={styles.signupButton}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "grey", fontSize: 14 }}>Already Registered?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: colors.fiuBlue, fontSize: 14 }}> Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  signupButton: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    width: "80%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fiuBlue,
  },
  headerText: {
    fontSize: 26,
    color: colors.fiuBlue,
    alignSelf: "center",
    paddingLeft: "5%",
    paddingRight: "40%",
  },
  pantherIcon: {
    flex: 1,
    width: "90%",
    height: "90%",
  },
  signupBox: {
    paddingTop: "5%",
    width: "80%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});
