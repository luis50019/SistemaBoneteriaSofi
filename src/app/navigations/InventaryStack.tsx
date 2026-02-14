import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import InventoryScreen from "../../screens/InventoryScreen/InventoryScreen";
import MainLayout from "../mainLayout/MainLayout";
import SalesHistoryScreen from "../../screens/SalesScreen/SalesHistoryScreen";
import NewProductoScreen from "../../screens/NewProductScreen/NewProductScreen";
import QuickSaleScreen from "../../screens/QuickSaleScreen/QuickSaleScreen";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function ScreenWithLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
  
function InventaryStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home">
        {() => (
          <ScreenWithLayout>
            <HomeScreen />
          </ScreenWithLayout>
        )}
      </Stack.Screen>
      <Stack.Screen name="Inventary">
        {() => (
          <ScreenWithLayout>
            <InventoryScreen />
          </ScreenWithLayout>
        )}
      </Stack.Screen>
      <Stack.Screen name="Sales">
        {() => (
          <ScreenWithLayout>
            <SalesHistoryScreen />
          </ScreenWithLayout>
        )}
      </Stack.Screen>
      <Stack.Screen name="AddProduct">
        {() => (
          <ScreenWithLayout>
            <NewProductoScreen />
          </ScreenWithLayout>
        )}
      </Stack.Screen>
      <Stack.Screen name="QuickSale">
        {() => (
          <ScreenWithLayout>
            <QuickSaleScreen />
          </ScreenWithLayout>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default InventaryStack;
