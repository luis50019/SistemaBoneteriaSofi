import { StyleSheet } from "react-native";

export const stylesCameraScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  bottomBar: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },

  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#13daec",
    borderWidth: 6,
    borderColor: "rgba(255,255,255,0.4)",
  },

  previewContainer: {
    flex: 1,
    backgroundColor: "black",
  },

  previewImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  previewActions: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  actionButton: {
    alignItems: "center",
  },

  actionText: {
    color: "white",
    marginTop: 6,
    fontWeight: "600",
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  permissionText: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },

  permissionButton: {
    backgroundColor: "#13daec",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  permissionButtonText: {
    fontWeight: "700",
  },
});
