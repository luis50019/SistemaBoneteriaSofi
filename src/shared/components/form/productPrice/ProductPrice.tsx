import React from "react";
import { View, Text, TextInput } from "react-native";
import { styleProductPrice } from "./ProductPrice.style";
import { useFormContext } from "react-hook-form";
import InputCustom from "../inputCustom/InputCustom";

export default function ProductPrice() {
  const { control } = useFormContext();
  return (
    <>
      <Text style={styleProductPrice.label}>Precio de Venta</Text>
      <View style={styleProductPrice.priceContainer}>
        <Text style={styleProductPrice.priceSymbol}>$</Text>
        <InputCustom
          control={control}
          name="price"
          keyboardType="decimal-pad"
          placeholder="0.00"
          secure={false}
          styleInput={styleProductPrice.priceInput}
        />
      </View>
    </>
  );
}
