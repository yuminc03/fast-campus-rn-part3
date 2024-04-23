import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../components/Header/Header';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';
import { Spacer } from '../components/Spacer';
import { Icon } from '../components/Icons';

export const LinkListScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();
  const onPressButton = useCallback(() => {
    navigation.navigate('LinkDetail');
  }, []);
  const onPressAddButton = useCallback(() => {
    navigation.navigate('AddLink');
  }, []);

  return (
    <View style={{ flex: 1}}>
      <Header>
        <Header.Group>
          <Header.Title title='LINK LIST'/>
        </Header.Group>
      </Header>
      <View style={{ flex: 1 }}>
        <Button onPress={onPressButton}>
          <Typography fontSize={16}>LINK DETAIL로 이동</Typography>
        </Button>
        <Spacer space={12}/>
        <Button onPress={onPressAddButton}>
          <Typography fontSize={16}>링크 등록하기로 이동</Typography>
        </Button>
      </View>
      <View style={{ position: 'absolute', right: 24, bottom: 24 + safeAreaInset.bottom }}>
        <Button onPress={onPressAddButton}>
          <View style={{ 
            width: 52, 
            height: 52, 
            borderRadius: 26, 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'black'
          }}>
            <Icon name='add' color='white' size={32}/>
          </View>
        </Button>
      </View>
    </View>
  );
}