import React from 'react';
import { View } from 'react-native';

import { Header } from '../src/components/Header/Header';

export const FeedListScreen: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Header>
        <Header.Title title='FEED LIST' />
      </Header>
    </View>
  );
}