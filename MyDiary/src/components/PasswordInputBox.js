import React from "react";
import { TextInput, View } from "react-native";

import { Spacer } from '../components/Spacer';
import { Typography } from '../components/Typography';

export const PasswordInputBox = (props) => {
  return (
    <>
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
              borderColor: props.errorMessage ? 'red' : 'black',
            }}>
              {props.value.length > item && (
                <View style={{
                  width: 20, 
                  height: 20, 
                  borderRadius: 10, 
                  backgroundColor: props.errorMessage ? 'red' : 'black'
                }}/>
              )}
            </View>
          );
        })}
      </View>
      {props.errorMessage && (
          <>
            <Spacer space={12}/>
            <View style={{flexDirection: 'row', paddingHorizontal: 24}}>
              <Spacer space={24} horizontal/>
              <Typography fontSize={16} color={{fontSize: 16}}>{props.errorMessage}</Typography>
            </View>
          </>
        )}
    </>
  );
}
