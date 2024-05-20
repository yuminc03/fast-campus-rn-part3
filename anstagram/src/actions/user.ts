import { ThunkAction, ThunkDispatch } from "redux-thunk";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { sleep } from "../utils/sleep";
import { RootReducer } from "../store";
import { FeedInfo } from "../@types/FeedInfo";
import { UserInfo } from "../@types/UserInfo";
import { TypeFeedListActions } from "./feed";

export const SET_USER_INFO = 'SET_USER_INFO' as const;

export const GET_MY_FEED_REQUEST = 'GET_MY_FEED_REQUEST' as const;
export const GET_MY_FEED_SUCCESS = 'GET_MY_FEED_SUCCESS' as const;
export const GET_MY_FEED_FAILURE = 'GET_MY_FEED_FAILURE' as const;

export const setUserInfo = (user: UserInfo) => {
  return {
    type: SET_USER_INFO,
    user
  };
}

export const getMyFeedRequest = () => {
  return {
    type: GET_MY_FEED_REQUEST,
  };
}

export const getMyFeedSuccess = (list: FeedInfo[]) => {
  return {
    type: GET_MY_FEED_SUCCESS,
    list
  };
}

export const getMyFeedFailure = () => {
  return {
    type: GET_MY_FEED_FAILURE,
  };
}

export const signIn = (idToken: string): TypeUserThunkAction => async (dispatch) => {
  // await sleep(1000);
  // dispatch(setUserInfo({
  //   uid: 'TEST_UID',
  //   name: 'TEST_NAME',
  //   profileImage: 'TEST_PROFILE_IMAGE',
  // }));

  const googleSigninCredential = auth.GoogleAuthProvider.credential(idToken);
  const signinResult = await auth().signInWithCredential(googleSigninCredential);
  const userDB = await database().ref(`/users/${signinResult.user.uid}`);

  try {
    const user = await userDB.once('value').then((snapshot) => snapshot.val());
    const now = new Date().getTime();
    if (user === null) {
      await userDB.set({
        name: signinResult.user.displayName,
        profileImage: signinResult.user.photoURL,
        uid: signinResult.user.uid,
        createdAt: now,
        lastLoginAt: now,
      })
    } else {
      await userDB.update({
        lastLoginAt: now,
      })
    }
  } catch (error) {

  }

  dispatch(
    setUserInfo({
      uid: signinResult.user.uid,
      name: signinResult.user.displayName ?? 'Unknown Name',
      profileImage: signinResult.user.photoURL ?? '',
    })
  )
}

export const getMyFeedList = (): TypeUserThunkAction => async (dispatch, getState) => {
  dispatch(getMyFeedRequest());
  const lastFeedList = await database().ref('/feed').once('value').then((snapshot) => snapshot.val());
  const result = Object.keys(lastFeedList).map((key) => {
    return {
      ...lastFeedList[key],
      id: key,
      likeHistory: lastFeedList[key].likeHistory ?? []
    };
  }).filter((item) => item.writer.uid === getState().userInfo.userInfo.uid);
  dispatch(getMyFeedSuccess(result));
}

export type TypeUserThunkAction = ThunkAction<Promise<void>, RootReducer, undefined, TypeUserInfoActions>
export type TypeUserDispatch = ThunkDispatch<RootReducer, undefined, TypeFeedListActions>

export type TypeUserInfoActions = 
 | ReturnType<typeof setUserInfo>
 | ReturnType<typeof getMyFeedRequest>
 | ReturnType<typeof getMyFeedSuccess>
 | ReturnType<typeof getMyFeedFailure>