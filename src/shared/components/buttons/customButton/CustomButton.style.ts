import { StyleSheet } from "react-native";
import { COLORS } from "../../../../core/const/color";

export const styleCusttomButton = StyleSheet.create({
  loginButton: {
      marginTop: 16,
      height: 60,
      backgroundColor: COLORS.PRIMARY,
      borderRadius: 999,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      elevation: 6,
    },
  
    loginText: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "900",
    },
})