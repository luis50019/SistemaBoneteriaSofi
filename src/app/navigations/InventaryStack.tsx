import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import InventoryScreen from "../../screens/InventoryScreen/InventoryScreen";
import MainLayout from "../mainLayout/MainLayout";
import SalesHistoryScreen from "../../screens/SalesScreen/SalesHistoryScreen";
import NewProductoScreen from "../../screens/NewProductScreen/NewProductScreen";

const Stack = createNativeStackNavigator();

function InventaryStack() {
  return (<MainLayout>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}  >
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Inventary'} component={InventoryScreen} />
      <Stack.Screen name={'Sales'} component={SalesHistoryScreen} />
      <Stack.Screen name={'AddProduct'} component={NewProductoScreen} />
    </Stack.Navigator>
  </MainLayout>);
}

export default InventaryStack;