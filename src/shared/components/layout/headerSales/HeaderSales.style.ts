import { StyleSheet } from "react-native";
import { COLORS } from "../../../../core/const/color";

export const styleHeaderSales = StyleSheet.create({
   header: {
    marginTop: 20,
    paddingHorizontal: 24,
    height: 'auto',
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  dateBadge: {
    backgroundColor: "rgba(255,45,120,0.1)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
  },

  dateText: {
    fontSize: 10,
    fontWeight: "800",
    color: COLORS.PRIMARY,
    textTransform: "uppercase",
  },

  headerStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  headerLabel: {
    fontSize: 10,
    letterSpacing: 3,
    fontWeight: "900",
    color: "#94A3B8",
  },

  amountRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },

  currency: {
    fontSize: 18,
    fontWeight: "900",
    color: COLORS.PRIMARY,
  },

  amount: {
    fontSize: 36,
    fontWeight: "900",
    color: "#020617",
  },

  salesCount: {
    fontSize: 28,
    fontWeight: "900",
  },

  salesLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: "#94A3B8",
  },
})