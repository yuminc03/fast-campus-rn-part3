import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from './src/navigations/RootNavigation';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation/>
        </NavigationContainer>
      </SafeAreaProvider>
    </RecoilRoot>
  );
}
