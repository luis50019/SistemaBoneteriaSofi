import { StyleSheet } from "react-native";

export const styleProductCard = StyleSheet.create({
   card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between" },
  cardInfo: { flexDirection: "row", gap: 12 },
  image: { width: 64, height: 64, borderRadius: 12 },
  cardTitle: { fontWeight: "900", fontSize: 16 },
  cardPrice: { color: "#777", fontWeight: "700" },
  promo: {
    color: "#FF2D78",
    fontWeight: "800",
    fontSize: 12,
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  qtyBtn: {
    width: 48,
    height: 48,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: { backgroundColor: "#FF2D78" },
  qty: { fontSize: 20, fontWeight: "900" },
})