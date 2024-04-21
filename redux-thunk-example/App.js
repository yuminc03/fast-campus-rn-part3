import { SafeAreaProvider } from "react-native-safe-area-context";
import { createContext, useState } from "react";
// import { Provider } from "react-redux";

import { CounterScreen } from './src/screens/CounterScreen';
import store from './src/store/store';

export const CounterContext = createContext();

export default function App() {
  const counterState = useState(0);

  return (
    <SafeAreaProvider>
      {/* <Provider store={store}> */}
      <CounterContext.Provider value={counterState}>
        <CounterScreen/>
      </CounterContext.Provider>
      {/* </Provider> */}
    </SafeAreaProvider>
  );
}