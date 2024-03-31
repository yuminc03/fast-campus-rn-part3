import React from 'react';
import { Button, View, Text } from 'react-native';

export class ScreenA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>이것은 ScreenA.</Text>
        <Button
          title="BScreen으로 이동"
          onPress={() => {
            this.props.navigation.navigate('ScreenB', { value: 'fromA' });
          }}
        />

        <Button
          title="CScreen으로 이동"
          onPress={() => {
            this.props.navigation.navigate('NestedStackNatigation', { screen: 'ScreenC' });
          }}
        />
      </View>
    );
  }
}