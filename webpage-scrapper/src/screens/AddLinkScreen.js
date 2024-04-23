import React, { useCallback, useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../components/Header/Header';
import { SingleLineInput } from '../components/SingleLineInput';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';
import { Spacer } from '../components/Spacer';
import { atomLinkList } from '../states/atomLinkList';
import { getOpenGraphData } from '../utils/OpenGraphTagUtils';
import { RemoteImage } from '../components/RemoteImage';

export const AddLinkScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();
  const updateList = useSetRecoilState(atomLinkList);
  const [ url, setUrl ] = useState('');
  const [ metaData, setMetaData ] = useState(null);
  const { width } = useWindowDimensions();

  const onPressClose = useCallback(() => {
    navigation.goBack();
  }, []);
  const onPressSave = useCallback(() => {
    console.log(url)
    if (url === '') return;

    updateList((prevState) => {
      const list = [{ 
        title: '',
        image: '',
        link: url,
        createdAt: new Date().toISOString(),
      }];

      return {
        list: list.concat(prevState.list)
      };
    });

    setUrl('');
  }, [url]);
  const onSubmitEditing = useCallback(async () => {
    const result = await getOpenGraphData(url);
    setMetaData(result);
  }, [url]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title='ADD LINK'/>
        </Header.Group>
        <Header.Icon iconName='close' onPress={onPressClose}/>
      </Header>
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        paddingTop: 32,
        paddingHorizontal: 24
      }}>
        <SingleLineInput 
          value={url}
          onChangeText={setUrl}
          placeholder='https://example.com'
          onSubmitEditing={onSubmitEditing}
        />

        {metaData !== null && (
          <>
            <Spacer space={20}/>
            <View style={{ borderWidth: 1, borderRadius: 4, borderColor: 'gray' }}>
              <RemoteImage url={metaData.image} width={width - 48} height={(width - 48) * 0.5}/>
              <View style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
                <Spacer space={10}/>
                <Typography fontSize={20} color='black'>{metaData.title}</Typography>
                <Spacer space={4}/>
                <Typography fontSize={16} color='gray'>{metaData.description}</Typography>
              </View>
            </View>
          </>
        )}
      </View>
      <Button onPress={onPressSave}>
        <View style={{ backgroundColor: url === '' ? 'gray' : 'black' }}>
          <View style={{ 
            height: 52, 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <Typography color='white' fontSize={18}>저장하기</Typography>
          </View>
          <Spacer space={safeAreaInset.bottom}/>
        </View>
      </Button>
    </View>
  );
}
