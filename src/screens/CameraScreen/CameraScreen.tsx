import { CameraView } from "expo-camera";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useCamera } from "../../shared/hooks/useCamera";
import { stylesCameraScreen } from "./CameraScreen.style";

export default function CameraScreen() {
  const { takePhoto, camera } = useCamera();

  return (
    <View style={stylesCameraScreen.container}>
      <CameraView ref={camera} style={StyleSheet.absoluteFill} facing="back" />
      <View style={stylesCameraScreen.bottomBar}>
        <Pressable
          style={stylesCameraScreen.captureButton}
          onPress={takePhoto}
        />
      </View>
    </View>
  );
}
