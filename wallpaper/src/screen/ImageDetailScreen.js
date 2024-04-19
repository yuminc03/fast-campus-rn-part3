import React, { useCallback, useState } from "react";
import { ActivityIndicator, View, useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import { Header } from "../components/Header/Header";
import { RemoteImage } from "../components/RemoteImage";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";
import { Icon } from "../components/Icons";

export const ImageDetailScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { downloading, setDownloading } = useState(false);
  const { width } = useWindowDimensions();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const onPressDownload = useCallback(async () => {
    setDownloading(true);
    const downloadResumable = FileSystem.createDownloadResumable(
      route.params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log('Finished Downloading to ', uri);

      const permissionResult = await MediaLibrary.getPermissionsAsync(true);
      console.log('permissionResult: ', permissionResult);
      if (permissionResult.status === 'denied') {
        // 기기에서 못 쓰는 상황
        setDownloading(false);
        return;
      }

      if (permissionResult.status === 'undetermined') {
        const requestResult = await MediaLibrary.requestPermissionsAsync();
        console.log(requestResult);
        if (requestResult.status === 'denied') {
          setDownloading(false);
          return;
        }
      }

      const asset = await MediaLibrary.createAssetAsync(uri);
      const album = MediaLibrary.createAlbumAsync('TestFolder', asset, false);
      console.log(album);
    } catch(error) {
      
    }

    setDownloading(false);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={'arrow-back'} onPress={onPressBack}/>
          <Header.Title title='IMAGE DETAIL'/>
        </Header.Group>
      </Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RemoteImage url={route.params.url} width={width} height={width * 1.5}/>
      </View>
      <Button onPress={onPressDownload}>
        <View style={{ paddingBottom: 24, backgroundColor: 'black' }}>
          { downloading ?(
            <View style={{ height: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator/>
            </View>
          ) : (
            <View style={{ height: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color={'white'}>DOWNLOAD</Typography>
              <Icon name='download' size={24} color='white'/>
            </View>
          )}
        </View>
      </Button>
    </View>
  );
}