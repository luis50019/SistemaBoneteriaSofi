import { StyleSheet } from "react-native";

export const styleHeader = StyleSheet.create({
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
})