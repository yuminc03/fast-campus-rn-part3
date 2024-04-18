import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Icon } from './src/components/Icons';
import { Spacer } from './src/components/Spacer';
import { Badge } from './src/components/Badge';
import { Button } from './src/components/Button';
import { Divider } from './src/components/Divider';
import { TabIcon } from './src/components/TabIcon';
import { HeaderWithoutComponent } from './src/components/HeaderWithoutComponent';
import { Header } from './src/components/Header/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Header>
          <Header.Group>
            <Header.Icon iconName='arrow-back'></Header.Icon>
            <Header.Title title='HEADER'></Header.Title>
          </Header.Group>
          <Header.Icon iconName='close'/>
        </Header>
        {/* <HeaderWithoutComponent title='HEADER'/> */}
        {/* <TabIcon iconName='home'/>
        <TabIcon iconName='home' visibleBadge/> */}
      </View>
    </SafeAreaProvider>
    // <View style={styles.container}>
    //   <Typography color='red' fontSize={24}>
    //     Open up App.js to start working on your app!
    //   </Typography>
    //   <Spacer space={20}/>
    //   <Divider/>
    //   <Spacer space={20}/>
    //   <Typography color='black' fontSize={16}>
    //     TEXT
    //   </Typography>
    //   <Spacer space={20}/>
    //   <Divider/>
    //   <Spacer space={40}/>
    //   <View style={{ flexDirection: 'row'}}>
    //     <LocalImage 
    //       localAsset={require('./assets/favicon.png')}
    //       width={50}
    //       height={50}
    //     />
    //     <Spacer horizontal={true} space={40}/>
    //     <LocalImage 
    //       localAsset={require('./assets/favicon.png')}
    //       width={50}
    //       height={50}
    //     />
    //   </View>
    //   <Spacer space={40} />
    //   <RemoteImage 
    //     url='https://i.imgur.com/TkIrScD.png'
    //     width={200}
    //     height={100}
    //   />
    //   <Icon name='home' size={40} color='gray'/>
    //   <View style={{ flexDirection: 'row' }}>
    //     <Badge fontSize={10}>
    //       <Typography>BADGE</Typography>
    //     </Badge>
    //     <Badge fontSize={5}>
    //       <Icon name='home' size={50} color='black'/>
    //     </Badge>
    //   </View>
    //   <View style={{ flexDirection: 'row', marginTop: 32 }}>
    //     <Button 
    //       onPress={() => {
    //         console.log('PRESSED BUTTON');
    //       }}
    //     >
    //       <Typography>TEXT BUTTON</Typography>
    //     </Button>
    //     <Button>
    //       <Icon name='home' size={50} color='skyblue'/>
    //     </Button>
    //   </View>
    // </View>
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
