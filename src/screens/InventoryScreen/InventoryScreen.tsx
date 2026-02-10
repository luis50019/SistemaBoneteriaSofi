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
        <ScrollView showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
          contentContainerStyle={stylesInventaryScreen.list}>
          <Item
            name="Tobillera G"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDf-bMU22Jk122eJF1o3Nm9lSVmCVKgwlk-KgQ12whdfamW5Ls_lwjSDXKCkRIbUSn-hzL8w2iVj9nYGJMVwMXipps7S40dFwCC0G8pueq47TsI6UpV41qsjzSJJqwTe6m2CkS2_1TO2hE9l-ISYcJZ8azCYZ9CDEd8Kzlh4pztZvGDqFTW4B87HuI9iemtqfr0NASjgXDKexNdJzSwMLej7Zg6qz7p4Yuvl0T6ncAM5zeUm50EolsCQyb1StPogNrJ21v0yo1SimQ"
            subtitle="156 unidades"
            subtitleColor={COLORS.SUCCESFUL}
          />
        </ScrollView>
        <FloatingButtom to="AddProduct" />
      </View>
    </>
  );
}
