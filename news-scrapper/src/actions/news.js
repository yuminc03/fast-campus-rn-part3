import { useDispatch } from "react-redux"

export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST'
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS'
export const GET_NEWS_LIST_FAILURE = 'GET_NEWS_LIST_FAILURE'

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