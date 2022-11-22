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
import React, { useState, useRef, useEffect } from "react";
import { Camera } from "expo-camera";
import colors from "../constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { firebase } from "../firebase.js";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";

const CameraScreen = ({ navigation }) => {
  let camera = Camera;
  let cameraRef = useRef();
  const [startCamera, setStartCamera] = useState(false);
  const [hasCamPermission, setHasCamPermission] = useState();
  const [hasMediaLibPermission, setHasMediaLibPermission] = useState();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState([]);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCamPermission(cameraPermission.status);
      setHasMediaLibPermission(mediaLibraryPermission.status);
    })();
  }, []);

  const startCam = async () => {
    if (hasCamPermission === "granted" && hasMediaLibPermission === "granted") {
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

    let newPhoto = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(newPhoto);
  };

  const recordVideo = async () => {
    if (!camera) return;
    const video = await Camera.recordAsync();
  };

  const retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    startCam();
  };

  const savePhoto = () => {
    MediaLibrary.saveToLibraryAsync(capturedImage.uri);
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
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.goBack()}
                      style={styles.backButton}
                    >
                      <AntDesign
                        name={"arrowleft"}
                        size={40}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={handleFlashMode}
                      style={styles.flasButton}
                    >
                      <Ionicons
                        name={flashMode == "on" ? "flash" : "flash-off"}
                        size={40}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.shutterView}>
                  <View>
                    <Entypo name={"circle"} size={80} color={colors.white} />
                  </View>
                  <View style={styles.flipcameraButton}>
                    <TouchableOpacity onPress={switchCamera}>
                      <Ionicons
                        name={"camera-reverse"}
                        size={50}
                        color={colors.white}
                      />
                    </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
  backButton: {
    paddingLeft: "10%",
    paddingBottom: "10%",
  },
  flasButton: {
    marginLeft: "52.5%",
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
    position: "absolute",
    left: "17.5%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: "7.5%",
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
  saveText: {
    fontSize: 16,
    color: colors.white,
  },
  saveButton: {
    alignItems: "center",
    marginLeft: 12.5,
    width: "100%",
    bottom: 10,
  },
});

const CameraPreview = ({ photo, retakePicture, savePhoto }) => {
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
          <View style={{ flexDirection: "row" }}>
            <View>
              <TouchableOpacity
                onPress={() => retakePicture()}
                style={styles.backButton}
              >
                <AntDesign name={"close"} size={40} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => savePhoto()}
                style={styles.saveButton}
              >
                <AntDesign name={"download"} size={40} color={colors.white} />
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
