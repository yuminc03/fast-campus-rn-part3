import React, { useCallback } from "react";
import { View } from 'react-native';

import { Typography } from "./Typography"; 

export const LottoNumberView = (props) => {
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
    <View style={{ 
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between'
    }}>
      {props.numbers.map((item) => {
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
  );
}