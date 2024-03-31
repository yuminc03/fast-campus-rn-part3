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
        <Stack.Screen name="Screen A" component={ScreenA}/>
        <Stack.Screen name="Screen B" component={ScreenB}/>
        <Stack.Screen name="Screen C" component={ScreenC}/>
      </Stack.Navigator>
    );
  }
}