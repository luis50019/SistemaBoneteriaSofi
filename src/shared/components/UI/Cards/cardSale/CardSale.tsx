import { Text, View } from "react-native";
import { styleCardSale } from "./CardSale.style";
import { MaterialIcons } from "@expo/vector-icons";

function CardSale() {
  return (<View style={styleCardSale.salesCard}>
          <Text style={styleCardSale.cardLabel}>VENTAS DE HOY</Text>

          <View style={styleCardSale.amountRow}>
            <Text style={styleCardSale.currency}>$</Text>
            <Text style={styleCardSale.amount}>4,250</Text>
            <Text style={styleCardSale.decimal}>.00</Text>
          </View>

          <View style={styleCardSale.trend}>
            <MaterialIcons
              name="trending-up"
              size={18}
              color="#16A34A"
            />
            <Text style={styleCardSale.trendText}>+12% vs ayer</Text>
          </View>
        </View>);
}

export default CardSale;