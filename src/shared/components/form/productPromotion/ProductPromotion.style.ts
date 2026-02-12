import { StyleSheet } from "react-native";

export const styleProductPromotion = StyleSheet.create({
  label: {
    fontSize: 11,
    fontWeight: "800",
    color: "#777",
    textTransform: "uppercase",
    marginLeft: 8,
  },
  promoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FFF3E0",
    paddingHorizontal: 16,
  },

  promoInput: {
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
})