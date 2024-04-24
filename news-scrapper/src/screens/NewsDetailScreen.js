import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header/Header';

export const NewsDetailScreen = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName='arrow-back' onPress={onPress}/>
          <Header.Title title='NEWS_DETAIL'/>
        </Header.Group>
      </Header>
    </View>
  );
}