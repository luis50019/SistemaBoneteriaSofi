import React from "react";
import { View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleProductPromotion } from "./ProductPromotion.style";

export default function ProductPromotion() {
  return (
    <>
      <Text style={styleProductPromotion.label}>Promoción</Text>
      <View style={styleProductPromotion.promoBox}>
        <MaterialIcons name="sell" size={22} color="#F57C00" />
        <TextInput
          style={styleProductPromotion.promoInput}
          value="3 piezas por $25"
        />
      </View>
    </>
  );
}
