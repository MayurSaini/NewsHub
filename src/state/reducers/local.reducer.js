import { ActionTypes } from "../ActionTypes";

const initialState = {
    newsList: [{val: "I am empty list"}]
};

function localReducer(state = initialState, action) {
  // console.log('localReducer', action);
  const result = action.result;
  switch (action.type) {
    case ActionTypes.NEWS_LIST:
      return {
        ...state,
        newsList: action.payload,
      };
    default:
      return state;
  }
}
export default localReducer;
