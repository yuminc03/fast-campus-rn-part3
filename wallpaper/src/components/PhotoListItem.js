import React, { useCallback } from "react";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from '../components/Button';
import { RemoteImage } from './RemoteImage';

export const PhotoListItem = (props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const onPressItem = useCallback(() => {
    navigation.navigate('ImageDetail', {url: props.url});
  }, []);

  return (
    <Button onPress={onPressItem} paddingHorizontal={20} paddingVertical={10}>
      <RemoteImage url={props.url} width={width - 40} height={width * 1.2}/>
    </Button>
  )
}