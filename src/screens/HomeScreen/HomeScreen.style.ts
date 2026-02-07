import { StyleSheet } from "react-native";
import { COLORS } from "../../core/const/color";

export const styleHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFD",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
  },

  storeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FCE4EC",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },

  subtitle: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#64748B",
  },

  title: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000",
  },

  content: {
    padding: 16,
    paddingBottom: 260,
  },

  salesCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    alignItems: "center",
  },

  cardLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "#64748B",
    letterSpacing: 1,
    marginBottom: 8,
  },

  amountRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  currency: {
    fontSize: 24,
    fontWeight: "900",
    color: COLORS.PRIMARY,
  },

  amount: {
    fontSize: 56,
    fontWeight: "900",
    color: "#000",
  },

  decimal: {
    fontSize: 24,
    fontWeight: "900",
    color: "#94A3B8",
  },

  trend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#DCFCE7",
  },

  trendText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#15803D",
  },

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

  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },

  tabItem: {
    alignItems: "center",
  },

  tabText: {
    fontSize: 10,
    fontWeight: "900",
    marginTop: 2,
    color: "#94A3B8",
    textTransform: "uppercase",
  },
});