import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleItemCategory } from "./ItemCategory.style";

export default function Category({ icon, label, active = false }: any) {
  return (
    <View style={styleItemCategory.category}>
      <View
        style={[
          styleItemCategory.categoryIcon,
          active && { backgroundColor: "#FF2D78" },
        ]}
      >
        <MaterialIcons
          name={icon}
          size={24}
          color={active ? "#fff" : "#888"}
        />
      </View>
      <Text style={styleItemCategory.categoryText}>{label}</Text>
    </View>
  );
}