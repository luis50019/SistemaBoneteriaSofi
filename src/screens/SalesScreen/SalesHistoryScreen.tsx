import React from "react";
import {View,ScrollView} from "react-native";
import { stylesSalesScreen } from "./SalesHistoryScreen.style";
import HeaderSales from "../../shared/components/layout/headerSales/HeaderSales";
import SaleItem from "../../shared/components/UI/Cards/cardSales/CardSale";
import BottomSales from "../../shared/components/buttons/bottomSales/BottomSales";

export default function SalesHistoryScreen() {
  return (
    <View style={stylesSalesScreen.container}>
      <HeaderSales />
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
      </ScrollView>
      <BottomSales iconButtom="shopping-cart" nameIcon="print" title="Nueva Venta" to="QuickSale"/>
    </View>
  );
}
