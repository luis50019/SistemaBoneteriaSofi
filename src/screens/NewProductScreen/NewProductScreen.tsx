import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { stylesNewProductScreen } from "./NewProductScreen.style";
import CategoryButton from "../../shared/components/buttons/CategoryButton/CategoryButton";
import { useNavigate } from "../../shared/hooks/useNavigate";

export default function NewProductoScreen() {
  const { navigationTo } = useNavigate();
  return (
    <View style={stylesNewProductScreen.container}>
      {/* HEADER */}
      <View style={stylesNewProductScreen.header}>
        <TouchableOpacity onPress={()=>navigationTo("Inventary")} style={stylesNewProductScreen.backButton}>
          <MaterialIcons name="arrow-back-ios-new" size={22} color="#E91E63" />
        </TouchableOpacity>

        <View>
          <Text style={stylesNewProductScreen.headerSubtitle}>Detalle del Artículo</Text>
          <Text style={stylesNewProductScreen.headerTitle}>Detalle de Producto</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={stylesNewProductScreen.content}>
        {/* IMAGEN */}
        <View style={stylesNewProductScreen.imageContainer}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuApE1Q3wx8AiTmo88PQGdUA6nGozBIk7qZcOJXzR_zZIMHto4Kaoqe4MTTsLLfo0T0iFuXkRwbzqMy7Qxo8_QKLPyQVKNUcb39nYJSiALDaadTKSiI1TTigwZjV8-oGv2rTlhJX8s_MBnB4Sd8zWmgx1ro8i_4ZPJJfNd1FIWJvi0PyvO09Pt72v8PYkNSN_NHQ6mJQYU7qXH3lPXwxMVacNvwe3vbYv2mHaB8363yGs6R6n20Ds02FsJn-O4ojIo49EZaZO3C9eUw",
            }}
            style={stylesNewProductScreen.image}
          />

          <TouchableOpacity style={stylesNewProductScreen.cameraButton}>
            <MaterialIcons name="photo-camera" size={26} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* FORM */}
        <View style={stylesNewProductScreen.section}>
          {/* Nombre */}
          <Text style={stylesNewProductScreen.label}>Nombre Corto</Text>
          <TextInput
            style={stylesNewProductScreen.input}
            value="Calcetín deportivo negro"
          />

          {/* SKU & STOCK */}
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

          {/* PRECIO */}
          <Text style={stylesNewProductScreen.label}>Precio de Venta</Text>
          <View style={stylesNewProductScreen.priceContainer}>
            <Text style={stylesNewProductScreen.priceSymbol}>$</Text>
            <TextInput
              style={stylesNewProductScreen.priceInput}
              keyboardType="numeric"
              value="13.00"
            />
          </View>

          {/* PROMO */}
          <Text style={stylesNewProductScreen.label}>Promoción</Text>
          <View style={stylesNewProductScreen.promoBox}>
            <MaterialIcons name="sell" size={22} color="#F57C00" />
            <TextInput
              style={stylesNewProductScreen.promoInput}
              value="3 piezas por $25"
            />
          </View>

          {/* CATEGORÍAS */}
          <Text style={stylesNewProductScreen.label}>Categoría</Text>
          <View style={stylesNewProductScreen.grid}>
            <CategoryButton icon="checkroom" text="Calcetín" active />
            <CategoryButton icon="style" text="Bóxer" active={false} />
            <CategoryButton icon="apparel" text="Ropa Interior" active={false} />
            <CategoryButton icon="add" text="Nueva" dashed active={false}/>
          </View>
        </View>
      </ScrollView>

      {/* BOTÓN GUARDAR */}
      <View style={stylesNewProductScreen.footer}>
        <TouchableOpacity style={stylesNewProductScreen.saveButton}>
          <MaterialIcons name="save" size={28} color="#FFF" />
          <Text style={stylesNewProductScreen.saveText}>Guardar Producto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
