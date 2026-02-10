import { StyleSheet } from "react-native";
import { COLORS } from "../../../../core/const/color";

export const styleImageWithCamaraButtom = StyleSheet.create({
  imageContainer: {
    height: 300,
    borderRadius: 40,
    overflow: "hidden",
    backgroundColor: "#EEE",
    marginBottom: 24,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  cameraButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
})