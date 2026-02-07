import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { GridButtomActionsStyle } from "./GridButtomActions.style";
function GridButtomActions() {
  return (<>
    <TouchableOpacity style={GridButtomActionsStyle.inventoryBtn}>
      <Text style={GridButtomActionsStyle.inventoryText}>INVENTARIO</Text>
      <MaterialIcons name="inventory-2" size={26} color="#fff" />
    </TouchableOpacity>

    <TouchableOpacity style={GridButtomActionsStyle.sellBtn}>
      <Text style={GridButtomActionsStyle.sellText}>VENDER</Text>
      <View style={GridButtomActionsStyle.sellIcon}>
        <MaterialIcons name="point-of-sale" size={36} color="#fff" />
      </View>
    </TouchableOpacity></>);
}

export default GridButtomActions;