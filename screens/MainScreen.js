import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { GOOGLE_MAPS_APIKEY } from "@env";
import Map from "../components/Map";
import MapView from "react-native-maps";
import colors from "../constants/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { firebase } from "../firebase.js";

const MainScreen = ({ navigation }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      }, []);
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={{ flex: 1, marginTop: "-25%" }}>
        <Map />
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: "20%",
          flexDirection: "row",
          flex: 1,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut(), navigation.navigate("Home");
          }}
          style={styles.signoutButton}
        >
          <Ionicons
            name={"exit-outline"}
            size={35}
            color={colors.white}
            style={{ marginLeft: "20%" }}
          />
          <Text style={styles.signoutText}>
            Sign
            {"\n"}out
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNavigator}>
        <TouchableOpacity>
          <Entypo name={"user"} size={35} color={colors.fiuBlue} />
          <Text style={styles.navigatorText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name={"message-square"} size={35} color={colors.fiuBlue} />
          <Text style={styles.navigatorText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Camera")}
          style={{
            height: 100,
            width: 100,
            borderRadius: "50%",
            borderColor: colors.darkGrey,
            backgroundColor: colors.white,
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name={"camera"} size={45} color={colors.fiuBlue} />
          <Text style={styles.navigatorText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name={"calendar"} size={35} color={colors.fiuBlue} />
          <Text style={styles.navigatorText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name={"users"} size={35} color={colors.fiuBlue} />
          <Text style={styles.navigatorText}>Friends</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  signoutButton: {
    height: 90,
    width: 45,
    borderRadius: "50%",
    backgroundColor: colors.fiuBlue,
    marginLeft: "82.5%",
    alignContent: "center",
    justifyContent: "center",
  },
  bottomNavigator: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 65,
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    flexDirection: "row",
  },
  navigatorText: {
    fontSize: 12,
    color: colors.fiuBlue,
  },
  signoutText: {
    fontSize: 12,
    color: colors.white,
    alignSelf: "center",
    textAlign: "center",
  },
});
