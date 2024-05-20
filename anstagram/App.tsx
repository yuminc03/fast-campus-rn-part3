import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import 'react-native-gesture-handler';
import { BannerAd, BannerAdSize, MobileAds, TestIds } from 'react-native-google-mobile-ads';

import { RootApp } from './src/RootApp';
import { Provider } from 'react-redux';
import { store } from './src/store';

GoogleSignin.configure();
MobileAds().initialize().then((result) => {
  console.log(result);
});

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootApp />
        <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
      </Provider>
    </SafeAreaProvider>
  );
}
