import { StyleSheet } from "react-native";
import { COLORS } from "../../core/const/color";

export const StyleMainLayout = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG_PRIMARY,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    borderColor: "black",
    height: "100%",
  },
})