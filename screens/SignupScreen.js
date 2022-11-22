import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import FIUPanther from "../assets/icons/FIU_panther.png";
import { Input } from "@rneui/themed";

const SignupScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          onPress={() => navigation.navigate("Home")}
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
          placeholder="Full Name"
          leftIcon={{ type: "font-awesome", name: "user", color: "grey" }}
        />
        <Input
          placeholder="Email Address"
          leftIcon={{ type: "font-awesome", name: "at", color: "grey" }}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "lock", color: "grey" }}
        />
        <Input
          placeholder="Confirm Password"
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "grey",
          }}
        />
      </View>
      <TouchableOpacity style={styles.signupButton}>
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
