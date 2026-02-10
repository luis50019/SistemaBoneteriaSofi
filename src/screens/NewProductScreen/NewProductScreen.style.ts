import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#E91E63",
  secondary: "#FCE4EC",
};

export const stylesNewProductScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    padding: 16,
    paddingBottom: 140,
  },


  section: {
    gap: 16,
  },

  label: {
    fontSize: 11,
    fontWeight: "800",
    color: "#777",
    textTransform: "uppercase",
    marginLeft: 8,
  },

  input: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "700",
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  stockBox: {
    width: 120,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },

  stockNumber: {
    fontSize: 20,
    fontWeight: "900",
    color: "#2E7D32",
  },

  stockText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#2E7D32",
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
    color: COLORS.primary,
    marginRight: 8,
  },

  priceInput: {
    fontSize: 28,
    fontWeight: "900",
    flex: 1,
  },

  promoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FFF3E0",
    paddingHorizontal: 16,
  },

  promoInput: {
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
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
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  categoryDashed: {
    borderStyle: "dashed",
  },

  categoryText: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
  },

});
