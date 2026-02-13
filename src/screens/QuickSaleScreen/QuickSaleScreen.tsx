import React from "react";
import {View,} from "react-native";
import HeaderSummary from "../../shared/components/layout/header/headerSummary/HeaderSummary";
import ItemCategories from "../../shared/components/layout/grid/ItemCategories/ItemCategories";
import ListProduct from "../../shared/components/layout/grid/listProduct/ListProduct";
import BottomSales from "../../shared/components/buttons/bottomSales/BottomSales";

export default function QuickSaleScreen() {
  return (
    <View style={{  flex: 1,
      flexDirection: "column",
      gap: 10,
      backgroundColor: "#F9FAFB" }}>
      <HeaderSummary/>
      <ItemCategories/>
      <ListProduct/>
      <BottomSales iconButtom="arrow-forward-ios" nameIcon="delete" title="CONFIRMAR VENTA" to="Sales" />
    </View>
  );
}
