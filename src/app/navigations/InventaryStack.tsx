import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import InventoryScreen from "../../screens/InventoryScreen/InventoryScreen";
import MainLayout from "../mainLayout/MainLayout";
import SalesHistoryScreen from "../../screens/SalesScreen/SalesHistoryScreen";
import NewProductoScreen from "../../screens/NewProductScreen/NewProductScreen";
import QuickSaleScreen from "../../screens/QuickSaleScreen/QuickSaleScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const withLayout = (Component: React.ComponentType) => () =>
  (
    <MainLayout>
      <Component />
    </MainLayout>
  );

function InventaryStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home" component={withLayout(HomeScreen)} />
      <Stack.Screen name="Inventary" component={withLayout(InventoryScreen)} />
      <Stack.Screen name="Sales" component={withLayout(SalesHistoryScreen)} />
      <Stack.Screen name="AddProduct" component={withLayout(NewProductoScreen)} />
      <Stack.Screen name="QuickSale" component={withLayout(QuickSaleScreen)} />
    </Stack.Navigator>
  );
}

export default InventaryStack;
