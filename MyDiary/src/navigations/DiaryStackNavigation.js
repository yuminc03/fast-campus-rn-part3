import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { DiaryListScreen } from '../screens/DiaryListScreen';
import { DiaryDetailScreen } from '../screens/DiaryDetailScreen';

const Stack = createNativeStackNavigator();

export const DiaryStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='DiaryList' component={DiaryListScreen}/>
    </Stack.Navigator>
  );
}