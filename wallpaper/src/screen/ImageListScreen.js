import React, { FlatList } from 'react-native';
import { View } from 'react-native';

import { Header } from '../components/Header/Header';
import { IMAGE_LIST } from '../constants';
import { PhotoListItem } from '../components/PhotoListItem';

export const ImageListScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="IMAGE LIST"/>
      </Header>
      <FlatList 
        style={{ flex: 1 }} 
        data={IMAGE_LIST}
        renderItem={({ item }) => {
          return (
            <PhotoListItem url={item}/>
          );
        }}
      />
    </View>
  );
}