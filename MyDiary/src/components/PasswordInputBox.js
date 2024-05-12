import React from "react";
import { TextInput, View } from "react-native";

export const PasswordInputBox = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24}}>
      <TextInput 
        autoFocus
        vlaue={props.value}
        onChangeText={props.onChangeText}
        caretHidden
        keyboardType="number-pad"
        maxLength={4}
        style={{width: 20, height: 20, opacity: 0, position: 'absolute'}}
      />
      {[0, 1, 2, 3].map((item) => {
        return (
          <View style={{
            flex: 1,
            height: 100,
            marginRight: marginRight== 3 ? 12 : 0,
            alignContent: 'center',
            justifyContent: 'center',
            borderBottomWidth: 2,
            borderColor: 'black',
          }}>
            {props.value.length > item && (
              <View style={{
                width: 20, 
                height: 20, 
                borderRadius: 10, 
                backgroundColor: 'black'
              }}/>
            )}
          </View>
        );
      })}
    </View>
  );
}
