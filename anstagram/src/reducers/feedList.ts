import { FeedInfo } from "../@types/FeedInfo";
import { CREATE_FEED_SUCCESS, FAVORITE_FEED_SUCCESS, GET_FEED_LIST_SUCCESS, TypeFeedListActions, getFeedListSuccess } from "../actions/feed";

export type TypeFeedListReducer = {
  list: FeedInfo[],
}
const defaultFeedListState: TypeFeedListReducer = {
  list: [],
}

export const feedListReducer = (state: TypeFeedListReducer=defaultFeedListState, action: TypeFeedListActions) => {
  
  return {
    ...state
  };
}