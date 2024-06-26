import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';

import { Header } from '../components/Header/Header';
import { useTotalFeedList } from '../selectors/feed';
import { FeedListItem } from '../components/FeedListItem';
import { TypeFeedListDispatch, favoriteFeed, getFeedList } from '../actions/feed';
import { Spacer } from '../components/Spacer';
import { useRootNavigation } from '../navigations/RootStackNavigation';

export const HomeScreen: React.FC = () => {
  const rootNavigation = useRootNavigation();

  const feedList = useTotalFeedList();
  const dispatch = useDispatch<TypeFeedListDispatch>();
  const onPressHome = useCallback(() => {
    rootNavigation.navigate('AddFeed');
  }, []);

  useEffect(() => {
    // crashlytics().crash(); // crashlytics 테스트
    dispatch(getFeedList());
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header>
        <Header.Title title='Home' />
        <Header.Icon iconName='add' onPress={onPressHome} />
      </Header>

      <FlatList 
        data={feedList}
        renderItem={({item}) => {
          return (
            <FeedListItem 
              image={item.imageUrl}
              comment={item.content}
              isLiked={false}
              likeCount={item.likeHistory.length}
              writer={item.writer.name}
              craetedAt={item.createdAt}
              onPressFeed={() => {
                console.log('onPressFeed');
              }}
              onPressFavorite={() => {
                dispatch(favoriteFeed(item));
              }}
            />
          );
        }}
        ItemSeparatorComponent={() => (
          <Spacer space={24} />
        )}
      />
    </View>
  );
}