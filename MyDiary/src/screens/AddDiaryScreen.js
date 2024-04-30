import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header/Header';

export const AddDiaryScreen = () => {
  const navigation = useNavigation();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={{ flex: 1}}>
      <Header>
        <Header.Group>
          <Header.Title title='Add Diary'/>
        </Header.Group>
        <Header.Icon iconName='close' onPress={onPressBack}/>
      </Header>
    </View>
  )
}