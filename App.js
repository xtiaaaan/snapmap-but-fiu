import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import CameraScreen from "./screens/CameraScreen";
import { store } from "./store";
import ForgotPassScreen from "./screens/ForgotPassScreen";
import { useEffect, useState } from "react";
import { firebase } from "./firebase.js";

const Stack = createStackNavigator();

export default function App() {
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initilizing) setInitilizing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initilizing) return null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenu"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera"
              component={CameraScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
