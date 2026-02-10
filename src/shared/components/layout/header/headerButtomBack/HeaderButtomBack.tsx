import { View, TouchableOpacity, Text } from "react-native"
import { useNavigate } from "../../../../hooks/useNavigate"
import { MaterialIcons } from "@expo/vector-icons";
import { styleHeaderButtonBack } from "./HeaderButtomBack.style";

function HeaderButtomBack() {
  const { navigationTo } = useNavigate();
  return (<View style={styleHeaderButtonBack.header} >
    <TouchableOpacity onPress={() => navigationTo("Inventary")} style={styleHeaderButtonBack.backButton} >
      <MaterialIcons name="arrow-back-ios-new" size={22} color="#E91E63" />
    </TouchableOpacity>

    < View >
      <Text style={styleHeaderButtonBack.headerSubtitle}> Detalle del Artículo </Text>
      <Text style={styleHeaderButtonBack.headerTitle} > Detalle de Producto </Text>
    </View>
  </View>);
}

export default HeaderButtomBack;