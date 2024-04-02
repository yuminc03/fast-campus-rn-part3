import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={24}>
        Open up App.js to start working on your app!
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
