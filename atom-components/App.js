import { StyleSheet, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Spacer } from './Spacer';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={24}>
        Open up App.js to start working on your app!
      </Typography>
      <Typography color='black' fontSize={16}>
        TEXT
      </Typography>
      <Spacer space={40} />
      <View style={{ flexDirection: 'row'}}>
        <LocalImage 
          localAsset={require('./assets/favicon.png')}
          width={50}
          height={50}
        />
        <Spacer horizontal={true} space={40} />
        <LocalImage 
          localAsset={require('./assets/favicon.png')}
          width={50}
          height={50}
        />
      </View>
      <Spacer space={40} />
      <RemoteImage 
        url='https://i.imgur.com/TkIrScD.png'
        width={200}
        height={100}
      />
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
