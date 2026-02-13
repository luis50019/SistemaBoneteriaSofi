import { FlatList } from "react-native";
import ProductCard from "../../../UI/Cards/productCard/ProductCard";
import { styleListProduct } from "./ListProduct.style";
import { products } from "./data";

function ListProduct() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styleListProduct.content}
      renderItem={({ item }) => (
        <ProductCard
          title={item.title}
          price={item.price}
          promo={item.promo}
          qty={item.qty}
          image={item.image}
        />
      )}
    />
  );
}

export default ListProduct;
