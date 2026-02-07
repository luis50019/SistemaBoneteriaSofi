import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

function InventaryStack() {
  return (<Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}  >
    <Stack.Screen name={'Home'} component={HomeScreen}/>
  </Stack.Navigator>);
}

export default InventaryStack;