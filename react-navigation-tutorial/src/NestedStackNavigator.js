import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenA } from './ScreenA';
import { ScreenB } from './ScreenB';
import { ScreenC } from './ScreenC';

const Stack = createNativeStackNavigator();

export class NestedStackNatigation extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA}/>
        <Stack.Screen name="ScreenB" component={ScreenB}/>
        <Stack.Screen name="ScreenC" component={ScreenC}/>
      </Stack.Navigator>
    );
  }
}