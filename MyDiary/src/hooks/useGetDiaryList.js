import { useSetRecoilState } from "recoil";
import database from '@react-native-firebase/database';

import { stateDiaryList } from '../states/stateDiaryList';
import { useCallback } from "react";

export const useGetDiaryList = () => {
  const setDiaryList = useSetRecoilState(stateDiaryList);

  return useCallback(async (userInfo) => {
    const userDiaryDB = database().ref(`diary/${userInfo.uid}`);
    const diaryListResult = (await userDiaryDB.once('value')).then((snapshot) => {
      return snapshot.val();
    });
    const list = Object.keys(diaryListResult).map((key) => diaryListResult[key]);
    console.log('list', list);
    setDiaryList(list);
  }, []);
}