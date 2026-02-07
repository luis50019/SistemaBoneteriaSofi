import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../../screens/AuthScreen/LoginScreen";

const Stack = createNativeStackNavigator();

function AuthStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        animation:'slide_from_right'
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />

    </Stack.Navigator>
  )
}

export default AuthStack;