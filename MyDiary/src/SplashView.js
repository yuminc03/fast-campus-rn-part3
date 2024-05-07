import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useSetRecoilState } from 'recoil';

import { stateUserInfo } from './states/stateUserInfo';
import { Typography } from "./components/Typography";

export const SplashView = (props) => {
  const [showLoginButton, setShowLoginButton] = useState(false);
  const setUserInfo = useSetRecoilState(stateUserInfo);

  const signinUserIdenfify = useCallback(async (idToken) => {
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const result = await auth().signInWithCredential(googleCredential);
    // 사용자 정보가 들어오게 되는
    console.log(result);
    const userDBRefKey = `/users/${result.user.uid}`;
    const userResult = await database().ref(userDBRefKey).once('value').then((snapshot) => {
      return snapshot.val();
    });
    console.log(userResult);
    const now = new Date().toISOString();

    if (userResult === null) {
      await database().ref(userDBRefKey).set({
        name: result.additionalUserInfo.profile.name,
        profileImage: result.additionalUserInfo.profile.picture,
        uid: result.user.uid,
        password: '',
        createdAt: now,
        lastLoginAt: now
      })
    } else {
      await database().ref(userDBRefKey).update({
        lastLoginAt: now,
      })
    }

    const userInfo = await database().ref(userDBRefKey).once('value').then((snapshot) => snapshot.val());
    console.log('userInfo: ', userInfo);
    setUserInfo(userInfo);
    props.onFinishLoad();
  }, []);

  const onPressGoogleLogin = useCallback(async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    signinUserIdenfify(idToken);
  }, []);

  const userSilentLogin = useCallback(async () => {
    try {
      const {idToken} = await GoogleSignin.signInSilently();
      signinUserIdenfify(idToken);
    } catch(error) {
      setShowLoginButton(true);
    }
  }, []);

  useEffect(() => {
    userSilentLogin();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {showLoginButton && <GoogleSigninButton onPress={onPressGoogleLogin}/>}
    </View>
  );
}