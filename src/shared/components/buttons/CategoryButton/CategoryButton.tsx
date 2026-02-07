import { Text, TouchableOpacity } from "react-native";
import { stylesNewProductScreen } from "../../../../screens/NewProductScreen/NewProductScreen.style";
import { MaterialIcons } from "@expo/vector-icons";

interface CategoryButtonProps {
  icon: string;
  text: string;
  active: boolean;
  dashed?: boolean;
}

export default function CategoryButton({ icon, text, active, dashed }:CategoryButtonProps) {
  return (
    <TouchableOpacity
      style={[
        stylesNewProductScreen.categoryButton,
        active && stylesNewProductScreen.categoryActive,
        dashed && stylesNewProductScreen.categoryDashed,
      ]}
    >
      <MaterialIcons
        name={icon}
        size={28}
        color={active ? "#FFF" : "#555"}
      />
      <Text style={[stylesNewProductScreen.categoryText, active && { color: "#FFF" }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
