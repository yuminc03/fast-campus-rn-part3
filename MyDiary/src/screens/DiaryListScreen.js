import React, { useCallback } from "react";
import { View } from "react-native";

import { Header } from "../components/Header/Header";
import { useNavigation } from "@react-navigation/native";

export const DiaryListScreen = () => {
  const navigation = useNavigation();
  const onPressSettings = useCallback(() => {
    navigation.navigate('Setting');
  }, []);
  
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title='Diary List'/>
        </Header.Group>
        <Header.Icon iconName='settings' onPress={onPressSettings}/>
      </Header>
    </View>
  );
}