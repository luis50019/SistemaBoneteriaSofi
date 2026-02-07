import { StyleSheet } from "react-native";

export const styleNavBar = StyleSheet.create({
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
})