import React, { useCallback, useState } from "react";
import { View } from 'react-native';

import { Header } from '../Header/Header';
import { Button } from "../Button";
import { Icon } from "../Icons";
import { Spacer } from "../Spacer";
import { Typography } from "../Typography";

export const CounterScreen = (props) => {
  const [value, setValue] = useState(0);
  const onPressMinus = useCallback(() => {
    setValue((value) => value - 1);
  }, []);
  const onPressPlus = useCallback(() => {
    setValue((value) => value + 1);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title='COUNTER'></Header.Title>
      </Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Button paddingHorizontal={4} paddingVertical={4} onPress={onPressMinus}>
            <Icon name='remove' size={20} color='black'/>
          </Button>
          <Spacer horizontal space={20}/>
          <Typography fontSize={20}>
            {`${value}개`}
          </Typography>
          <Spacer horizontal space={20}/>
          <Button paddingHorizontal={4} paddingVertical={4} onPress={onPressPlus}>
            <Icon name='add' size={20} color='black'/>
          </Button>
        </View>
      </View>
    </View>
  );
}