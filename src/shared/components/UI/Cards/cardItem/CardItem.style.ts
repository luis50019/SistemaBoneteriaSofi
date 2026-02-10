import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../core/const/color";

export const styleCardItem = StyleSheet.create({
  item: {
      backgroundColor: "#fff",
      borderRadius: 24,
      padding: 16,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: "#E2E8F0",
    },
  
    itemInfo: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 14,
      gap: 12,
    },
  
    image: {
      width: 64,
      height: 64,
      borderRadius: 16,
      backgroundColor: "#F8FAFC",
    },
  
    itemTitle: {
      fontSize: 16,
      fontWeight: "900",
      color: "#020617",
    },
  
    badge: {
      marginTop: 6,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 999,
      alignSelf: "flex-start",
    },
  
    badgeText: {
      fontSize: 11,
      fontWeight: "900",
      color: "#fff",
      letterSpacing: 0.5,
    },
  
    subtitle: {
      marginTop: 6,
      fontSize: 13,
      fontWeight: "800",
      color: "#64748B",
    },
  
    actionBtn: {
      height: 52,
      borderRadius: 16,
      backgroundColor: "#020617",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },
  
    actionText: {
      fontSize: 14,
      fontWeight: "900",
      color: "#fff",
      letterSpacing: 1,
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