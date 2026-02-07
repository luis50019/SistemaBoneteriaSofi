import {View,ScrollView,} from "react-native";
import { styleHomeScreen } from "./HomeScreen.style";
import CardSale from "../../shared/components/UI/Cards/cardSale/CardSale";
import GridOptions from "../../shared/components/layout/grid/options/GridOptions";
import GridButtomActions from "../../shared/components/layout/grid/gridButtomActions/GridButtomActions";
export default function HomeScreen() {
  return (
    <View style={styleHomeScreen.container}>
      <ScrollView contentContainerStyle={styleHomeScreen.content}>
        <CardSale />
        <GridOptions />
      </ScrollView>
      <View style={styleHomeScreen.bottom}>
        <GridButtomActions />
      </View>
    </View>
  );
}