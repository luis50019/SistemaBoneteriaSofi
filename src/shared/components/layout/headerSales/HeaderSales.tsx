import { Text, View } from "react-native";
import { styleHeaderSales } from "./HeaderSales.style";
function HeaderSales() {
  return (<View style={styleHeaderSales.header}>

    <View style={styleHeaderSales.headerStats}>
      <View>
        <Text style={styleHeaderSales.headerLabel}>VENTAS TOTALES</Text>
        <View style={styleHeaderSales.amountRow}>
          <Text style={styleHeaderSales.currency}>$</Text>
          <Text style={styleHeaderSales.amount}>2,450.00</Text>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styleHeaderSales.salesCount}>24</Text>
        <Text style={styleHeaderSales.salesLabel}>VENTAS</Text>
      </View>
    </View>
  </View>);
}

export default HeaderSales;