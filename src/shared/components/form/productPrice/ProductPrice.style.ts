import { StyleSheet } from "react-native";
import { COLORS } from "../../../../core/const/color";

export const styleProductPrice = StyleSheet.create({
   label: {
    fontSize: 11,
    fontWeight: "800",
    color: "#777",
    textTransform: "uppercase",
    marginLeft: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(233,30,99,0.2)",
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 72,
  },

  priceSymbol: {
    fontSize: 26,
    fontWeight: "900",
    color: COLORS.PRIMARY,
    marginRight: 8,
  },

  priceInput: {
    fontSize: 28,
    fontWeight: "900",
    flex: 1,
  },
})