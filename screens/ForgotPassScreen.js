import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const ForgotPassScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View
        style={{
          width: "90%",
        }}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: "2.5%",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name={"arrowleft"} size={20} color={colors.fiuBlue} />
        </TouchableOpacity>
      </View>
      <View
        style={{ paddingTop: "10%", paddingHorizontal: "2.5%", width: "90%" }}
      >
        <Text style={styles.headerText}>Reset Password</Text>
        <Text style={{ paddingTop: "2.5%", fontSize: 16, color: "grey" }}>
          Enter the email associated with your account and we'll send you an
          email with instructions to reset your password
        </Text>
        <Text
          style={{
            paddingTop: "5%",
            fontSize: 20,
            color: "grey",
            paddingBottom: "2.5%",
          }}
        >
          Email Address
        </Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="roary022@fiu.edu"
            style={styles.textInput}
            onChange={(email) => setEmail(email)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.sendButton}>
        <Text style={{ color: colors.white, fontSize: 18 }}>
          Send Instructions
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  headerText: {
    fontSize: 26,
    color: colors.fiuBlue,
  },
  inputView: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    height: 45,
  },
  textInput: {
    fontSize: 18,
    color: colors.darkGrey,
    height: 50,
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
  sendButton: {
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    width: "80%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fiuBlue,
  },
});
