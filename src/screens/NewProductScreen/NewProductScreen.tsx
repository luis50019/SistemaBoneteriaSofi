import React from "react";
import {View,ScrollView,} from "react-native";
import { stylesNewProductScreen } from "./NewProductScreen.style";
import ImageWithCamaraButtom from "../../shared/components/UI/ImageWithCameraButtom/ImageWithCamaraButtom";
import BottomSave from "../../shared/components/buttons/bottomSave/BottomSave";
import Categories from "../../shared/components/layout/grid/categories/Categories";
import ProductBasicInfo from "../../shared/components/form/productBasicInfo/ProductBasicInfo";
import ProductPrice from "../../shared/components/form/productPrice/ProductPrice";
import ProductPromotion from "../../shared/components/form/productPromotion/ProductPromotion";

export default function NewProductoScreen() {
  return (
    <View style={stylesNewProductScreen.container}>
      <ScrollView contentContainerStyle={stylesNewProductScreen.content}>
        <ImageWithCamaraButtom/>
        <ProductBasicInfo/>
        <ProductPrice/>
        <ProductPromotion/>
        <Categories/>
      </ScrollView>
      <BottomSave/>
    </View>
  );
}
