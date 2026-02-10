import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../core/const/color";

export const styleHeaderButtonBack = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#F8BBD0",
    backgroundColor: "rgba(255,255,255,0.95)",
  },

  backButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: COLORS.SECONDARY,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  headerSubtitle: {
    fontSize: 10,
    fontWeight: "700",
    color: COLORS.PRIMARY,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
  },
})