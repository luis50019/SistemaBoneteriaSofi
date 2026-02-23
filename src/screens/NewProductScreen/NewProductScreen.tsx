import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { stylesNewProductScreen } from "./NewProductScreen.style";
import ImageWithCamaraButtom from "../../shared/components/UI/ImageWithCameraButtom/ImageWithCamaraButtom";
import BottomSave from "../../shared/components/buttons/bottomSave/BottomSave";
import Categories from "../../shared/components/layout/grid/categories/Categories";
import ProductBasicInfo from "../../shared/components/form/productBasicInfo/ProductBasicInfo";
import ProductPrice from "../../shared/components/form/productPrice/ProductPrice";
import ProductPromotion from "../../shared/components/form/productPromotion/ProductPromotion";
import { useRoute } from "@react-navigation/native";
import { useProductForm } from "../../shared/hooks/useProductForm";
import { FormProvider } from "react-hook-form";

export default function NewProductoScreen() {
  const [photo, setPhoto] = useState<string>("");
  const form = useProductForm();
  const route = useRoute<any>();
  useEffect(() => {
    if (route.params?.imageUri) {
      setPhoto(route.params.imageUri);
    }
  }, [route.params?.imageUri]);
  return (
    <View style={stylesNewProductScreen.container}>
      <ScrollView contentContainerStyle={stylesNewProductScreen.content}>
        <ImageWithCamaraButtom image_uri={photo} />
        <FormProvider {...form}>
          <ProductBasicInfo />
          <ProductPrice />
          <ProductPromotion />
        </FormProvider>
        <Categories />
      </ScrollView>
      <BottomSave />
    </View>
  );
}
