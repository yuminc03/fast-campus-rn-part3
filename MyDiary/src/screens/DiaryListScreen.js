import React, { useCallback } from "react";
import { View } from "react-native";

import { Header } from "../components/Header/Header";

export const DiaryListScreen = () => {
  const onPressSettings = useCallback(() => {

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