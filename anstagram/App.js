import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

import { FeedListItem } from './src/components/FeedListItem';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <FeedListItem
          image='https://docs.expo.dev/static/images/tutorial/background-image.png'
          likeCount={10}
          wirter='Pratt Yeon'
          comment='This is test!'
          isLiked={false}
          onPressFeed={() => {
            console.log('onpress!')
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
