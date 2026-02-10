import { StyleSheet } from "react-native";
import { COLORS } from "../../../../core/const/color";

export const styleBottomSales = StyleSheet.create({
   bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: "row",
    gap: 12,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  printBtn: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },

  newSaleBtn: {
    flex: 1,
    height: 64,
    borderRadius: 18,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  newSaleText: {
    color: "#fff",
    fontWeight: "900",
    letterSpacing: 2,
  },

  fab: {
    position: "absolute",
    right: 24,
    bottom: 120,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.BG_DARK,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
})