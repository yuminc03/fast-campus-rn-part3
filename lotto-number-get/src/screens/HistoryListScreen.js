import React, { useState, useCallback } from "react";
import { FlatList, View } from "react-native";
import { Header } from '../components/Header/Header';
import { Typography } from "../components/Typography";

export const HistoryListScreen = (props) => {
  const [ history ] = useState([
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6]},
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6]},
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6]},
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6]},
  ])
  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    if (randomNumber === 0) { return 'pink'; } 
    if (randomNumber === 1) { return 'skyblue'; }
    if (randomNumber === 2) { return 'gray'; }
    if (randomNumber === 2) { return 'green'; }
    if (randomNumber === 2) { return 'purple'; }
    return 'black'
  });

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title='HISTORY'/>
      </Header>
      <FlatList 
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 24,
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ 
              paddingHorizontal: 20, 
              paddingVertical: 12, 
              marginHorizontal: 24, 
              height: 120, 
              backgroundColor: 'white'
            }}>
              <Typography fontSize={16}>
                {item.date.getFullYear()}. {item.date.getMonth()}. {item.date.getDay()}
              </Typography>
              <View style={{ 
                flex: 1, 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between'
              }}>
                {[1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <View style={{ 
                      backgroundColor: getNumberBackgroundColor(item), 
                      width: 40, 
                      height: 40, 
                      borderRadius: 20, 
                      alignItems: 'center', 
                      justifyContent: 'center'
                    }}>
                      <Typography fontSize={20} color='white'>{item}</Typography>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}