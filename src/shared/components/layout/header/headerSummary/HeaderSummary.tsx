import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleHeaderSummary } from "./HeaderSummary.style";

function HeaderSummary() {
  return ( <View style={styleHeaderSummary.header}>
        <View>
          <Text style={styleHeaderSummary.headerSubtitle}>RESUMEN ACTUAL</Text>
          <View style={styleHeaderSummary.amountRow}>
            <Text style={styleHeaderSummary.currency}>$</Text>
            <Text style={styleHeaderSummary.amount}>125.00</Text>
          </View>
        </View>

        <View style={styleHeaderSummary.headerRight}>
          <Text style={styleHeaderSummary.itemsBadge}>6 ARTÍCULOS</Text>
          <MaterialIcons name="history" size={28} color="#FF2D78" />
        </View>
      </View>);
}

export default HeaderSummary;