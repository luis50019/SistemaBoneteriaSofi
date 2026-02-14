import { Text, TouchableOpacity } from "react-native";
import { stylesNewProductScreen } from "../../../../screens/NewProductScreen/NewProductScreen.style";
import { MaterialIcons } from "@expo/vector-icons";
type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

interface CategoryButtonProps {
  icon: MaterialIconName;
  categoryText: string;
  active: boolean;
  dashed?: boolean;
}

export default function CategoryButton({ icon, categoryText, active, dashed }: CategoryButtonProps) {
  return (
    <TouchableOpacity
      style={[
        stylesNewProductScreen.categoryButton,
        active && stylesNewProductScreen.categoryActive,
        dashed && stylesNewProductScreen.categoryDashed,
      ]}
    >
      <MaterialIcons name={icon} size={28} color={active ? "#FFF" : "#555"} />
      <Text style={[stylesNewProductScreen.categoryText, active && { color: "#FFF" }]}>
        {categoryText}
      </Text>
    </TouchableOpacity>
  );
}
