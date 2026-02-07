import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleGridStyles } from "./GridOptions.style";
import { COLORS } from "../../../../../core/const/color";
function GridOptions() {
  return (<View style={styleGridStyles.grid}>
    <TouchableOpacity style={styleGridStyles.gridItem}>
      <View style={styleGridStyles.gridIconPink}>
        <MaterialIcons name="analytics" size={28} color={COLORS.PRIMARY} />
      </View>
      <Text style={styleGridStyles.gridText}>REPORTE</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styleGridStyles.gridItem}>
      <View style={styleGridStyles.gridIconBlue}>
        <MaterialIcons
          name="add-shopping-cart"
          size={28}
          color="#2563EB"
        />
      </View>
      <Text style={styleGridStyles.gridText}>ENTRADA MERCANCÍA</Text>
    </TouchableOpacity>
  </View>);
}

export default GridOptions;