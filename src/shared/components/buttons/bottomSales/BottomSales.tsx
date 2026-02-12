import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styleBottomSales } from "./BottomSales.style";
function BottomSales() {
  return ( <View style={styleBottomSales.bottomBar}>
        <TouchableOpacity style={styleBottomSales.printBtn}>
          <Ionicons name="print-outline" size={26} color="#64748B" />
        </TouchableOpacity>

        <TouchableOpacity style={styleBottomSales.newSaleBtn}>
          <Text style={styleBottomSales.newSaleText}>Iniciar Ventas</Text>
          <Ionicons name="cart" size={22} color="#fff" />
        </TouchableOpacity>
      </View> );
}

export default BottomSales;