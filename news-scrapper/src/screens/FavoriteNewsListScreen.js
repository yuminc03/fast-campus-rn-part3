import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import { Header } from "../components/Header/Header";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { Button } from "../components/Button";
import { Typography } from "../components/Typography";

export const FavoriteNewsListScreen = () => {
  const navigation = useNavigation();
  const data = useSelector((state) => state.news.favoriteNews);
  const onPressItem = useCallback((newsItem) => {
    navigation.navigate('NewsDetail', {newsItem});
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title='FAVORITE_NEWS_LIST'/>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <Button onPress={() => onPressItem(item)}>
              <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 8 }}>
                <Typography fontSize={24} numberOfLines={1}>{item.title}</Typography>
                <Typography fontSize={16} numberOfLines={2} color='gray'>{item.description}</Typography>
              </View>
            </Button>
          );
        }}
      />
    </View>
  );
}