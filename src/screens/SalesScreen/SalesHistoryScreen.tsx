import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { stylesSalesScreen } from "./SalesHistoryScreen.style";
import { COLORS } from "../../core/const/color";

export default function SalesHistoryScreen() {
  return (
    <View style={stylesSalesScreen.container}>
      {/* HEADER */}
      <View style={stylesSalesScreen.header}>

        <View style={stylesSalesScreen.headerStats}>
          <View>
            <Text style={stylesSalesScreen.headerLabel}>VENTAS TOTALES</Text>
            <View style={stylesSalesScreen.amountRow}>
              <Text style={stylesSalesScreen.currency}>$</Text>
              <Text style={stylesSalesScreen.amount}>2,450.00</Text>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={stylesSalesScreen.salesCount}>24</Text>
            <Text style={stylesSalesScreen.salesLabel}>VENTAS</Text>
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView style={stylesSalesScreen.content} showsVerticalScrollIndicator={false}>
        <SaleItem
          time="14:20"
          period="PM"
          amount="$125.00"
          description="3 Calcetines, 1 Boxer..."
          paid
        />

        <SaleItem
          time="13:45"
          period="PM"
          amount="$450.00"
          description="5 Camisetas, 10 Calcetines"
        />

        <SaleItem
          time="13:10"
          period="PM"
          amount="$80.00"
          description="2 Boxer Caballero"
        />

        {/* Divider */}
        <View style={stylesSalesScreen.dividerRow}>
          <View style={stylesSalesScreen.divider} />
          <Text style={stylesSalesScreen.dividerText}>CORTE DE MEDIODÍA</Text>
          <View style={stylesSalesScreen.divider} />
        </View>

        <SaleItem
          time="11:30"
          period="AM"
          amount="$1,200.00"
          description="Venta Mayorista (30 items)"
        />

        <SaleItem
          time="10:15"
          period="AM"
          amount="$35.00"
          description="1 Mercería Pack"
        />

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* BOTTOM BAR */}
      <View style={stylesSalesScreen.bottomBar}>
        <TouchableOpacity style={stylesSalesScreen.printBtn}>
          <Ionicons name="print-outline" size={26} color="#64748B" />
        </TouchableOpacity>

        <TouchableOpacity style={stylesSalesScreen.newSaleBtn}>
          <Text style={stylesSalesScreen.newSaleText}>NUEVA VENTA</Text>
          <Ionicons name="cart" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* FLOATING SHARE */}
      <TouchableOpacity style={stylesSalesScreen.fab}>
        <Ionicons name="share-social" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

/* ---------- COMPONENT ---------- */

function SaleItem({
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
    <TouchableOpacity style={stylesSalesScreen.saleItem}>
      <View style={stylesSalesScreen.saleLeft}>
        <View style={stylesSalesScreen.timeCircle}>
          <Text style={stylesSalesScreen.time}>{time}</Text>
          <Text style={stylesSalesScreen.period}>{period}</Text>
        </View>

        <View>
          <View style={stylesSalesScreen.amountRow}>
            <Text style={stylesSalesScreen.saleAmount}>{amount}</Text>
            {paid && (
              <View style={stylesSalesScreen.paidBadge}>
                <Text style={stylesSalesScreen.paidText}>PAGADO</Text>
              </View>
            )}
          </View>
          <Text style={stylesSalesScreen.description}>{description}</Text>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
    </TouchableOpacity>
  );
}
