import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TabA } from "./TabA";
import { NestedStackNatigation } from "./NestedStackNavigator";
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export class BottomTabNavigation extends React.Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen 
          name={"TabA"} 
          component={TabA} 
          options={{ tabBarIcon: () => <Ionicons name="home" size={20}/> }}
        />
         <BottomTab.Screen 
          name={"TabB"} 
          component={NestedStackNatigation} 
          options={{ tabBarIcon: () => <Ionicons name="settings" size={20}/> }}
        />
      </BottomTab.Navigator>
    );
  }
}