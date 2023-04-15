import { ActionTypes } from "./ActionTypes";

export const saveBookmarkList = (data) => {
    return { type: ActionTypes.SAVE_BOOKMARK, payload: data };
  };

export const getNewsList = (data) => {
  return { type: ActionTypes.NEWS_LIST, payload: data };
};