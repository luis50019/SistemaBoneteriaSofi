import { StyleSheet } from "react-native";

export const styleProductoBasincInfo = StyleSheet.create({
   label: {
    fontSize: 11,
    fontWeight: "800",
    color: "#777",
    textTransform: "uppercase",
    marginLeft: 8,
  },

  input: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "700",
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  stockBox: {
    width: 120,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },

  stockNumber: {
    fontSize: 20,
    fontWeight: "900",
    color: "#2E7D32",
  },

  stockText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#2E7D32",
  },
})