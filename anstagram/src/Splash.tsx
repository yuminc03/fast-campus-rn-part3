import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { useDispatch } from "react-redux";

import { TypeUserDispatch, signIn } from "./actions/user";

export const SplashView: React.FC<{onFinishLoad: () => void}> = (props) => {
  const [showLoginButton, setShowLoginButton] = useState(false);
  const dispatch = useDispatch<TypeUserDispatch>();

  const appInit = useCallback(async () => {
    try {
      const {idToken} = await GoogleSignin.signInSilently();
      if (idToken !== null) {
        // 로그인 처리
        // await dispatch(signIn(idToken));
        props.onFinishLoad();
      }
      setShowLoginButton(true);
    } catch (ex) {
      setShowLoginButton(true);
    }
  }, []);

  const onPerssSignin = useCallback(async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const {idToken} = await GoogleSignin.signIn();
    if (idToken !== null) {
      // signin
      await dispatch(signIn(idToken));
      props.onFinishLoad();
    } 
  }, []);

  useEffect(() => {
    appInit();
  }, []);
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {showLoginButton && (
        <GoogleSigninButton onPress={onPerssSignin} />
      )}
    </View>
  );
}