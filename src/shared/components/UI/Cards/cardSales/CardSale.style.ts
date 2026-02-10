import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../core/const/color";

export const styleCardSales = StyleSheet.create({
  saleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8FAFC",
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  saleLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  timeCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,45,120,0.1)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,45,120,0.3)",
  },

  time: {
    fontSize: 12,
    fontWeight: "900",
    color: COLORS.PRIMARY,
  },

  period: {
    fontSize: 9,
    fontWeight: "800",
    color: COLORS.PRIMARY,
  },

  saleAmount: {
    fontSize: 18,
    fontWeight: "900",
  },

  paidBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },

  paidText: {
    fontSize: 9,
    fontWeight: "900",
    color: "#166534",
  },

  description: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748B",
    maxWidth: 180,
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  dividerText: {
    marginHorizontal: 10,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#94A3B8",
  },
})