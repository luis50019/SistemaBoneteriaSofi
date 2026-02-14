import AppNavigator from './src/app/navigations/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator/>
    </SafeAreaProvider>
  );
}

