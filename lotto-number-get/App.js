import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './src/navigation/BottomTabNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigation/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
