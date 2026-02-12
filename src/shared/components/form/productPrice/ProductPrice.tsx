import React from "react";
import { View, Text, TextInput } from "react-native";
import { styleProductPrice } from "./ProductPrice.style";

export default function ProductPrice() {
  return (
    <>
      <Text style={styleProductPrice.label}>Precio de Venta</Text>
      <View style={styleProductPrice.priceContainer}>
        <Text style={styleProductPrice.priceSymbol}>$</Text>
        <TextInput
          style={styleProductPrice.priceInput}
          keyboardType="numeric"
          value="13.00"
        />
      </View>
    </>
  );
}
