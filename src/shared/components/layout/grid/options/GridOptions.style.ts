import { StyleSheet } from "react-native";

export const styleGridStyles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },

  gridItem: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },

  gridIconPink: {
    backgroundColor: "#FCE4EC",
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
  },

  gridIconBlue: {
    backgroundColor: "#EFF6FF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
  },

  gridText: {
    fontSize: 12,
    fontWeight: "900",
    color: "#000",
    textAlign: "center",
  },
})