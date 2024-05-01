import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { Typography } from "./components/Typography";

export const SplashView = (props) => {
  const [showLoginButton, setShowLoginButton] = useState(false);

  const signinUserIdenfify = useCallback(async (idToken) => {
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const result = await auth().signInWithCredential(googleCredential);
    // 사용자 정보가 들어오게 되는
    console.log(result);
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