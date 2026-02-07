import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#FF2D78",
  primaryDark: "#D4145A",
  bg: "#F9FAFB",
  dark: "#0F172A",
};

export const stylesSalesScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  /* HEADER */
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
    color: COLORS.primary,
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
    color: COLORS.primary,
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

  /* CONTENT */
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 16,
    paddingTop: 24,
    marginTop: 12,
  },

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
    color: COLORS.primary,
  },

  period: {
    fontSize: 9,
    fontWeight: "800",
    color: COLORS.primary,
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

  /* BOTTOM */
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
    backgroundColor: COLORS.primary,
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
    backgroundColor: COLORS.dark,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
});
