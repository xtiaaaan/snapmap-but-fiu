import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Camera } from "expo-camera";
import colors from "../constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CameraScreen = ({ navigation }) => {
  let camera = Camera;
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState([]);

  const startCam = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log(status);
    if (status == "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Permission denied");
    }
  };

  const handleFlashMode = () => {
    if (flashMode == "on") {
      setFlashMode("off");
    } else {
      setFlashMode("on");
    }
  };

  const switchCamera = () => {
    if (cameraType == "back") {
      setCameraType("front");
    } else {
      setCameraType("back");
    }
  };

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const recordVideo = async () => {
    if (!camera) return;
    const video = await Camera.recordAsync();
  };

  const savePhoto = () => {};
  const retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    startCam();
  };

  return (
    <View style={styles.safeAreaView}>
      {startCam ? (
        <View style={{ flex: 1, width: "100%" }}>
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage}
              savePhoto={savePhoto}
              retakePicture={retakePicture}
            />
          ) : (
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={{ flex: 1, width: "100%" }}
              ref={(r) => {
                camera = r;
              }}
            >
              <SafeAreaView style={styles.optionsView}>
                <View style={{ flexDirection: "column" }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Debug")}
                      style={styles.optionsButton}
                    >
                      <AntDesign
                        name={"arrowleft"}
                        size={35}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={handleFlashMode}
                      style={styles.optionsButton}
                    >
                      <Ionicons
                        name={flashMode == "on" ? "flash" : "flash-off"}
                        size={35}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={switchCamera}
                      style={styles.optionsButton}
                    >
                      <Ionicons
                        name={
                          cameraType == "front" ? "camera-reverse" : "camera"
                        }
                        size={35}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.shutterView}>
                  <View>
                    <Entypo name={"circle"} size={80} color={colors.white} />
                  </View>
                  <TouchableOpacity
                    onPress={takePicture}
                    style={{ position: "absolute", bottom: "44%" }}
                  >
                    <MaterialCommunityIcons
                      name="camera-iris"
                      size={50}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </Camera>
          )}
        </View>
      ) : (
        <SafeAreaView>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            <Ionicons name="camera" size={20} color={colors.fiuBlue} />
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  optionsView: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  optionsButton: {
    paddingLeft: "10%",
    paddingBottom: "10%",
  },
  shutterView: {
    position: "absolute",
    bottom: "2.5%",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "center",
  },
  shutterButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  flipcameraButton: {
    marginTop: 20,
    borderRadius: "50%",
    height: 25,
    width: 25,
  },
  startcamButton: {
    width: "80%",
    height: 45,
    borderRadius: 10,
    backgroundColor: colors.fiuBlue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

const CameraPreview = ({ photo, retakePicture, savePhoto }) => {
  console.log("nice shit", photo);
  return (
    <View
      style={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      <ImageBackground source={{ uri: photo && photo.uri }} style={{ flex: 1 }}>
        <SafeAreaView style={styles.optionsView}>
          <View style={{ flexDirection: "column" }}>
            <View>
              <TouchableOpacity
                onPress={retakePicture}
                style={styles.optionsButton}
              >
                <Entypo name={"cross"} size={35} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={savePhoto}
                style={styles.optionsButton}
              >
                <MaterialIcons
                  name={"add-to-photos"}
                  size={35}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
