import { SafeAreaProvider } from "react-native-safe-area-context";
import { CounterScreen } from "./src/components/screens/CounterScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <CounterScreen/>
    </SafeAreaProvider>
  );
}