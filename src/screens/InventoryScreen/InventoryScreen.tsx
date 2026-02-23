import { View, ScrollView } from "react-native";
import { stylesInventaryScreen } from "./InventoryScreen.style";
import FilterOptions from "../../shared/components/Filters/FilterOption/FilterOption";
import Item from "../../shared/components/UI/Cards/cardItem/CardItem";
import FloatingButtom from "../../shared/components/buttons/floatingButtom/FloatingButtom";
import { COLORS } from "../../core/const/color";
export default function InventoryScreen() {
  return (
    <>
      <View style={stylesInventaryScreen.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={stylesInventaryScreen.filters}
        >
          <FilterOptions active label="Todo" color={COLORS.PRIMARY} />
          <FilterOptions label="Bajo Stock" color={COLORS.ALERTS} />
          <FilterOptions outline label="Calcetín" />
          <FilterOptions outline label="Interior" />
        </ScrollView>
        <FloatingButtom to="AddProduct" />
      </View>
    </>
  );
}
