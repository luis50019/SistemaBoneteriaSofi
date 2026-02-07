import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../core/const/color";

export const GridButtomActionsStyle = StyleSheet.create({

  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },

  inventoryBtn: {
    height: 64,
    backgroundColor: "#0F172A",
    borderRadius: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  inventoryText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },

  sellBtn: {
    height: 96,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 24,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sellText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -1,
  },

  sellIcon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 12,
    borderRadius: 16,
  },
})