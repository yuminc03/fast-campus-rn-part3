import { FeedInfo } from "../@types/FeedInfo";
import { UserInfo } from "../@types/UserInfo";
import { GET_MY_FEED_SUCCESS, SET_USER_INFO, TypeUserInfoActions } from "../actions/user";

export type TypeUserInfoReducer = {
  userInfo: UserInfo | null,
  myFeedList: FeedInfo[]
}
const defaultUserInfoReducer = {
  // list: [],
  userInfo: null,
  myFeedList: [],
}

export const userInfoReducer = (state=defaultUserInfoReducer, action: TypeUserInfoActions) => {
  
  return {
    ...state
  };
}