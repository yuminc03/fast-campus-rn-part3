import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootApp } from './src/RootApp';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootApp />
      </Provider>
    </SafeAreaProvider>
  );
}
