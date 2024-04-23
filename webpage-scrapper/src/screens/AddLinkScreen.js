import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header/Header';

export const AddLinkScreen = () => {
  const navigation = useNavigation();
  const onPressClose = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View>
      <Header>
        <Header.Group>
          <Header.Title title='ADD LINK'/>
        </Header.Group>
        <Header.Icon iconName='close' onPress={onPressClose}/>
      </Header>
    </View>
  );
}
