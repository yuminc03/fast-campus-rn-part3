import React from 'react';
import { View } from 'react-native';

import { Header } from '../src/components/Header/Header';

export const MyPageScreen: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Header>
        <Header.Title title='MY PAGE' />
      </Header>
    </View>
  );
}