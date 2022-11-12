import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Camera, useCameraDevices } from "react-native-vision-camera";

const CameraScreen = ({ navigation }) => {
  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back;

  if (device == null) return <View></View>;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
