import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';

import { Header } from '../components/Header/Header';
import { Spacer } from '../components/Spacer';

export const NewsDetailScreen = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName='arrow-back' onPress={onPress}/>
          <Spacer space={12}/>
          <View style={{ maxWidth: 200 }}>
            <Header.Title title='NEWS_DETAIL'/>
          </View>
        </Header.Group>
      </Header>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: routes.params.newsItem.link }}
      />
    </View>
  );
}