import { StyleSheet } from "react-native";
import { COLORS } from "../../../../core/const/color";

export const styleBottomSave = StyleSheet.create({
   footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#FFF",
  },

  saveButton: {
    height: 72,
    borderRadius: 28,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },

  saveText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#FFF",
    textTransform: "uppercase",
  },
})