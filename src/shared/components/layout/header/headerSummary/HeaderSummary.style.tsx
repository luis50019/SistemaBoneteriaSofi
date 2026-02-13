import { StyleSheet } from "react-native";

export const styleHeaderSummary = StyleSheet.create({
   header: {
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerSubtitle: { fontSize: 10, color: "#999", fontWeight: "800" },
  amountRow: { flexDirection: "row", alignItems: "baseline" },
  currency: { color: "#FF2D78", fontSize: 20, fontWeight: "900" },
  amount: { fontSize: 48, fontWeight: "900" },

  headerRight: { alignItems: "flex-end" },
  itemsBadge: {
    fontSize: 10,
    fontWeight: "800",
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 6,
  },
})