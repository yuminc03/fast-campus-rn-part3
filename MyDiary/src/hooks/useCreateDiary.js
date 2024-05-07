import { useCallback } from "react";
import database from '@react-native-firebase/database';
import { useRecoilValue, useSetRecoilState } from "recoil";

import { stateUserInfo } from '../states/stateUserInfo';
import { stateDiaryList } from '../states/stateDiaryList';

export const useCreateDairy = () => {
  const userInfo = useRecoilValue(stateUserInfo);
  const setDiaryList = useSetRecoilState(stateDiaryList);

  return useCallback(async (photoUrl, date, title, content) => {
    if (date) return;

    if (content === '') return;

    if (title === '') return;

    const now = new Date().toISOString().at;
    const userDiaryDB = database().ref(`diary/${userInfo.uid}`).push();
    const saveItem = {
      photoUrl,
      title,
      content,
      date: date.toISOString(),
      createAt: now,
      updatedAt: now
    };

    await userDiaryDB.set(saveItem);
    setDiaryList((prevLIst) => {
      return prevLIst.concat({
        saveItem
      });
    });
  }, []);
}