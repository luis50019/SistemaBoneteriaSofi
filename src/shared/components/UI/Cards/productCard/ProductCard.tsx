import { Image, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleProductCard } from "./ProductoCard.style";

export default function ProductCard({ title, price, promo, qty, image }: any) {
  return (
    <View style={styleProductCard.card}>
      <View style={styleProductCard.cardHeader}>
        <View style={styleProductCard.cardInfo}>
          <Image source={{ uri: image }} style={styleProductCard.image} />
          <View>
            <Text style={styleProductCard.cardTitle}>{title}</Text>
            <Text style={styleProductCard.cardPrice}>{price}</Text>
          </View>
        </View>

        {promo && <Text style={styleProductCard.promo}>{promo}</Text>}
      </View>

      <View style={styleProductCard.qtyRow}>
        <Pressable style={styleProductCard.qtyBtn}>
          <MaterialIcons name="remove" size={22} />
        </Pressable>

        <Text style={styleProductCard.qty}>{qty}</Text>

        <Pressable style={[styleProductCard.qtyBtn, styleProductCard.addBtn]}>
          <MaterialIcons name="add" size={22} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}