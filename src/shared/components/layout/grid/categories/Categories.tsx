import { Text, View } from "react-native";
import CategoryButton from "../../../buttons/CategoryButton/CategoryButton";
import { styleCategories } from "./Categories.style";

function Categories() {
  return (
    <>
      <Text style={styleCategories.label}>Categoría</Text>
      <View style={styleCategories.grid}>
        <CategoryButton icon="checkroom" categoryText="Calcetín" active />
        <CategoryButton icon="style" categoryText="Bóxer" active={false} />
        <CategoryButton icon="checkroom" categoryText="Ropa Interior" active={false} />
        <CategoryButton icon="add" categoryText="Nueva" dashed active={false} />
      </View>
    </>
  );
}

export default Categories;
