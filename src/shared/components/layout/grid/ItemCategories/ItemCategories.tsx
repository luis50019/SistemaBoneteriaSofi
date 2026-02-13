import { ScrollView } from "react-native";
import Category from "../../../buttons/ItemCategory/ItemCategory";
import { styleItemCategory } from "./ItemCategories.style";

function ItemCategories() {
  return (<ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styleItemCategory.categories}
  >
    <Category icon="apps" label="Todo" active />
    <Category icon="checkroom" label="Calcetín" />
    <Category icon="local-laundry-service" label="Interior" />
    <Category icon="palette" label="Mercería" />
    <Category icon="sell" label="Ofertas" />
  </ScrollView>);
}

export default ItemCategories;