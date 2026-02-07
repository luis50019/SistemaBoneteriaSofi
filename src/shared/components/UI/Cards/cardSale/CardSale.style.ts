import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../core/const/color";

export const styleCardSale = StyleSheet.create({
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
  
})