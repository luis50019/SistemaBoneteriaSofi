import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../core/const/color";

export const styleCategories = StyleSheet.create({
   grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
label: {
    fontSize: 11,
    fontWeight: "800",
    color: "#777",
    textTransform: "uppercase",
    marginLeft: 8,
  },
  categoryButton: {
    width: "48%",
    height: 96,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  categoryActive: {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },

  categoryDashed: {
    borderStyle: "dashed",
  },

  categoryText: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
  },
})