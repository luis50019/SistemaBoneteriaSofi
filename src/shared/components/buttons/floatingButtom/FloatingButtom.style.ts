import { StyleSheet } from "react-native";
import { COLORS } from "../../../../core/const/color";

export const styleFloatingBottom = StyleSheet.create({
   fab: {
    position: "absolute",
    right: 24,
    bottom: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.BG_DARK,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
})