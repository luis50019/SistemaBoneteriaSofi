import { Text, View } from "react-native";
import CategoryButton from "../../../buttons/CategoryButton/CategoryButton";
import { styleCategories } from "./Categories.style";
function Categories() {
  return (
    <>
      <Text style={styleCategories.label}>Categoría</Text>
      <View style={styleCategories.grid}>
        <CategoryButton icon="checkroom" text="Calcetín" active />
        <CategoryButton icon="style" text="Bóxer" active={false} />
        <CategoryButton icon="apparel" text="Ropa Interior" active={false} />
        <CategoryButton icon="add" text="Nueva" dashed active={false} />
      </View>
    </>);
}

export default Categories;