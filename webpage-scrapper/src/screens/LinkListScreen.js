import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';

import { Header } from '../components/Header/Header';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';
import { Spacer } from '../components/Spacer';
import { Icon } from '../components/Icons';
import { atomLinkList } from '../states/atomLinkList';

export const LinkListScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();
  const data = useRecoilValue(atomLinkList);
  const onPressListItem = useCallback(() => {
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
      <FlatList
        style={{ flex: 1 }}
        data={data.list}
        renderItem={({ item }) => {
          return (
            <Button onPress={onPressListItem} paddingHorizontal={24} paddingVertical={24}>
              <View>
                <Typography fontSize={20}>{item.link}</Typography>
                <Spacer space={4}/>
                <Typography fontSize={16} color='gray'>
                  {item.title !== '' ? `${item.title.slice(0, 20)} | ` : ''}{new Date(item.createdAt).toLocaleString()}
                </Typography>
              </View>
            </Button>
          );
        }}
      />
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