import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import React, { useState } from 'react';
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
           placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
          />
        </View>
 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
           <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.goBackBtn} onPress={() => navigation.navigate("Home")}>
          <Text>Go back</Text>
        </TouchableOpacity>

        
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
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: colors.lightGrey,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
   backgroundColor:colors.fiuGold,
 },

 goBackBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
   backgroundColor:"#e9967a",
 }




});
