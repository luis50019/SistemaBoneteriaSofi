import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { stylesNewProductScreen } from "./NewProductScreen.style";
import HeaderButtomBack from "../../shared/components/layout/header/headerButtomBack/HeaderButtomBack";
import ImageWithCamaraButtom from "../../shared/components/UI/ImageWithCameraButtom/ImageWithCamaraButtom";
import BottomSave from "../../shared/components/buttons/bottomSave/BottomSave";
import Categories from "../../shared/components/layout/grid/categories/Categories";

export default function NewProductoScreen() {
  return (
    <View style={stylesNewProductScreen.container}>
      <HeaderButtomBack/>
      <ScrollView contentContainerStyle={stylesNewProductScreen.content}>
        <ImageWithCamaraButtom/>
        <View style={stylesNewProductScreen.section}>
          <Text style={stylesNewProductScreen.label}>Nombre Corto</Text>
          <TextInput
            style={stylesNewProductScreen.input}
            value="Calcetín deportivo negro"
          />
          <View style={stylesNewProductScreen.row}>
            <View style={{ flex: 1 }}>
              <Text style={stylesNewProductScreen.label}>SKU</Text>
              <TextInput
                style={stylesNewProductScreen.input}
                value="CAL-NEG-001"
              />
            </View>
            <View style={[stylesNewProductScreen.stockBox]}>
              <Text style={stylesNewProductScreen.stockNumber}>120</Text>
              <Text style={stylesNewProductScreen.stockText}>UNIDADES</Text>
            </View>
          </View>

          
          <Text style={stylesNewProductScreen.label}>Precio de Venta</Text>
          <View style={stylesNewProductScreen.priceContainer}>
            <Text style={stylesNewProductScreen.priceSymbol}>$</Text>
            <TextInput
              style={stylesNewProductScreen.priceInput}
              keyboardType="numeric"
              value="13.00"
            />
          </View>

          <Text style={stylesNewProductScreen.label}>Promoción</Text>
          <View style={stylesNewProductScreen.promoBox}>
            <MaterialIcons name="sell" size={22} color="#F57C00" />
            <TextInput
              style={stylesNewProductScreen.promoInput}
              value="3 piezas por $25"
            />
          </View>
          <Categories/>
        </View>
      </ScrollView>
      <BottomSave/>
    </View>
  );
}
