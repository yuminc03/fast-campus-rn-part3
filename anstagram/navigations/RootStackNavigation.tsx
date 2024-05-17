import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { BottomTabNavigation } from "./BottomTabNavigation";
import { AddFeedScreen } from "../screens/AddFeedScreen";
import { FeedListScreen } from "../screens/FeedListScreen";

export type RootStackParamList = {
  BottomTab: undefined,
  FeedList: {
    list: {
      id: string,
      content: string,
      writer: string,
      imageUrl: string,
      likeCount: number,
    } []
  }
  AddFeed: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      presentation: 'containedModal',
    }}>
      <Stack.Screen name='BottomTab' component={BottomTabNavigation} />
      <Stack.Screen name='AddFeed' component={AddFeedScreen} />
      <Stack.Screen name='FeedList' component={FeedListScreen} />
    </Stack.Navigator>
  );
}