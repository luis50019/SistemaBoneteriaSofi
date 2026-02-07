import { StyleSheet } from "react-native";
import { COLORS } from "../../../../core/const/color";

export const stylesInputIcon = StyleSheet.create({
  inputGroup: {
      flexDirection: "row",
      alignItems: "center",
    },
  
    iconBox: {
      borderWidth: 2,
      borderColor: "#e6dbe0",
      borderRightWidth: 0,
      paddingLeft: 16,
      height: 64,
      justifyContent: "center",
      borderTopLeftRadius: 999,
      borderBottomLeftRadius: 999,
    },
  
    input: {
      flex: 1,
      height: 64,
      borderWidth: 2,
      borderColor: "#e6dbe0",
      borderLeftWidth: 0,
      borderTopRightRadius: 999,
      borderBottomRightRadius: 999,
      paddingHorizontal: 16,
      fontSize: 20,
      fontWeight: "600",
      color: COLORS.TEXT_DARK,
    },
})