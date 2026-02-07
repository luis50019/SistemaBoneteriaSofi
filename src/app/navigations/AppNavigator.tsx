import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { useAuthStore } from '../../auth/store/store';
import InventaryStack from './InventaryStack';

export default function AppNavigator() {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      {user ? <InventaryStack/>:<AuthStack/>}
    </NavigationContainer>
  );
}
