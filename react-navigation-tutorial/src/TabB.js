import { View, Text } from 'react-native'
import React from 'react'

export class TabB extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>이것은 TabBarB이다.</Text>
      </View>
    );
  }
}