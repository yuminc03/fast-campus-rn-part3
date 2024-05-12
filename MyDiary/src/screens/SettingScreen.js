import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View } from "react-native";
import { useRecoilState } from 'recoil';
import database from '@react-native-firebase/database';

import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";
import { stateUserInfo } from '../states/stateUserInfo';
import { Button } from "../components/Button";
import { RemoteImage } from '../components/RemoteImage';
import { Typography } from "../components/Typography";
import { useImagePickedAndUpload } from "../hooks/useImagePickAndUpload";
import { Divider } from '../components/Divider';
import { Icon } from "../components/Icons";

export const SettingScreen = () => {
  const [userInfo, setUserInfo] = useRecoilState(stateUserInfo);
  const runImagePickAndUpload = useImagePickedAndUpload(false);
  const navigation = useNavigation();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressProfile = useCallback(async () => {
    const result = await runImagePickAndUpload();
    console.log(result);
    
    if (result.length >= 1) {
      const userDB = `/users/${userInfo.uid}`;

      // 프로필 이미지로 선택한 것이 업로드 됨
      setUserInfo((prevState) => {
        return {
          ... prevState,
          profileImage: result[0]
        }
      })

      await database().ref(userDB).update({
        profileImage: result[0]
      })
    }
  }, [userInfo, runImagePickAndUpload]);

  const onPressAddPressword = useCallback(() => {
    navigation.navigate('AddPassword');
  }, []);

  const onPressClearPassword = useCallback(() => {
    const userDB = `/users/${userInfo.uid}`;
    database().ref(userDB).update({
      password: '',
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName='arrow-back' onPress={onPressBack}/>
          <Spacer space={12} horizontal/>
          <Header.Title title='Setting'/>
        </Header.Group>
      </Header>
      <View style={{flex: 1, paddingTop: 32}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Button onPress={onPressProfile}>
            <RemoteImage 
              url={userInfo.profileImage} 
              width={100} 
              height={100}
              style={{borderRadius: 50}}
            />
          </Button>
          <Spacer space={20}/>
          <Typography fontSize={20}>{userInfo.name}</Typography>
        </View>

        <Spacer space={20}/>
        <Divider/>
        <Spacer space={20}/>
        <Button onPress={onPressAddPressword}>
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            paddingVertical: 12, 
            paddingHorizontal: 24
          }}>
            <Typography fontSize={16}>비밀번호 추가</Typography>
            <Icon name="chevron-forward-outline" size={16}/>
          </View>
        </Button>
        <Button onPress={onPressClearPassword}>
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            paddingVertical: 12, 
            paddingHorizontal: 24
          }}>
            <Typography fontSize={16}>비밀번호 초기화</Typography>
          </View>
        </Button>
      </View>
    </View>
  );
}