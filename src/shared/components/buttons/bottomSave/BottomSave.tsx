import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleBottomSave } from "./BottomSave.style";
function BottomSave() {
  return (<View style={styleBottomSave.footer}>
    <TouchableOpacity style={styleBottomSave.saveButton}>
      <MaterialIcons name="save" size={28} color="#FFF" />
      <Text style={styleBottomSave.saveText}>Guardar Producto</Text>
    </TouchableOpacity>
  </View>);
}

export default BottomSave;