import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styleCardSales } from "./CardSale.style";

export default function SaleItem({
  time,
  period,
  amount,
  description,
  paid,
}: {
  time: string;
  period: string;
  amount: string;
  description: string;
  paid?: boolean;
}) {
  return (
    <TouchableOpacity style={styleCardSales.saleItem}>
      <View style={styleCardSales.saleLeft}>
        <View style={styleCardSales.timeCircle}>
          <Text style={styleCardSales.time}>{time}</Text>
          <Text style={styleCardSales.period}>{period}</Text>
        </View>

        <View>
          <View style={styleCardSales.amountRow}>
            <Text style={styleCardSales.saleAmount}>{amount}</Text>
            {paid && (
              <View style={styleCardSales.paidBadge}>
                <Text style={styleCardSales.paidText}>PAGADO</Text>
              </View>
            )}
          </View>
          <Text style={styleCardSales.description}>{description}</Text>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
    </TouchableOpacity>
  );
}