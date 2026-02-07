import {View,ScrollView,} from "react-native";
import { styleHomeScreen } from "./HomeScreen.style";
import Header from "../../shared/components/layout/header/Header";
import CardSale from "../../shared/components/UI/Cards/cardSale/CardSale";
import GridOptions from "../../shared/components/layout/grid/options/GridOptions";
import NavBar from "../../shared/components/layout/navbar/NavBar";
import GridButtomActions from "../../shared/components/layout/grid/gridButtomActions/GridButtomActions";
export default function HomeScreen() {
  return (
    <View style={styleHomeScreen.container}>
      <Header />
      <ScrollView contentContainerStyle={styleHomeScreen.content}>
        <CardSale />
        <GridOptions />
      </ScrollView>
      <View style={styleHomeScreen.bottom}>
        <GridButtomActions />
        <NavBar />
      </View>
    </View>
  );
}