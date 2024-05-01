import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { RecoilRoot } from 'recoil';

import { RootApp } from './src/RootApp';

GoogleSignin.configure();

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <RootApp/>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}