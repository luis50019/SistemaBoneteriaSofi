import { StyleSheet } from "react-native";
import { COLORS } from "../../core/const/color";
export const stylesInventaryScreen = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG_PRIMARY,
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent:"flex-start"
  },
  filters: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginBottom: 16,
  },
  list: {
    backgroundColor:'transparent',
    paddingHorizontal:5,
    display:"flex",
    flexDirection:"column",
    height:'100%',
    paddingBottom:120,
  },
});
