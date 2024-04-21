import React, { useCallback, useState } from "react";
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components/Header/Header';
import { Button } from "../components/Button";
import { Icon } from "../components/Icons";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
import { addCount, deleteCount } from "../actions/counter";

export const CounterScreen = () => {
  // const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.count.count);

  const onPressMinus = useCallback(() => {
    // setCount((value) => value - 1);
    dispatch(deleteCount());
  }, []);
  const onPressPlus = useCallback(() => {
    // setCount((value) => value + 1);
    dispatch(addCount());
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