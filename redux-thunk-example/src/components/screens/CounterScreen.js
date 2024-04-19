import React, { useState } from "react";
import { View } from 'react-native';

import { Header } from '../Header/Header';
import { Button } from "../Button";

export const CounterScreen = (props) => {
  const [value, setValue] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title='COUNTER'></Header.Title>
      </Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button>

        </Button>
      </View>
    </View>
  );
}