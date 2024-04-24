import { useDispatch } from "react-redux"
import { getItem, setItem } from "../utils/AsyncStorageUtils";

export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST'
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS'
export const GET_NEWS_LIST_FAILURE = 'GET_NEWS_LIST_FAILURE'

export const CLIP_NEWS_ITEM = 'CLIP_NEWS_ITEM';
export const CLIPPED_TAB_FOCUS = 'CLIPPED_TAB_FOCUS';

export const CLIP_ITEM_RESET = 'CLIP_ITEM_RESET';
export const STORAGE_KEY = 'STORAGE_KEY';

export const getNewsList = (query) => (dispatch) => {
  dispatch({type: GET_NEWS_LIST_REQUEST});

  // client id: N0Yx1dRdGwm_Yqjgv0I9
  // client secret: k2WdVnbQBD

  // setTimeout(() => {
  //   dispatch({type: GET_NEWS_LIST_SUCCESS});
  // }, 2000);

  fetch(
    `https://openapi.naver.com/v1/search/news.json?query=${decodeURIComponent(query)}`,
    {
      headers: {
        'X-Naver-Client-Id': 'N0Yx1dRdGwm_Yqjgv0I9',
        'X-Naver-Client-Secret': 'k2WdVnbQBD',
      }
    }
  )
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    dispatch({type: GET_NEWS_LIST_SUCCESS, result})
  })
  .catch((error) => {
    dispatch({type: GET_NEWS_LIST_FAILURE, error})
  })
}

export const clipNewsItem = (newsItem) => (dispatch, getState) => {
  dispatch({
    type: CLIP_NEWS_ITEM,
    newsItem
  });

  const lastFavoriteList = getState().news.favoriteNews;
  setItem(STORAGE_KEY, JSON.stringify(lastFavoriteList));
}

export const clippedTapFocus = () => async (dispatch, getState) => {
  const isInitOnce = getState().news.isInitFocusOnce;

  dispatch({
    type: CLIPPED_TAB_FOCUS
  });

  if (isInitOnce) {
    return;
  }

  const savedItems = JSON.parse(await getItem(STORAGE_KEY));
  dispatch({
    type: CLIP_ITEM_RESET,
    savedItems
  });
}