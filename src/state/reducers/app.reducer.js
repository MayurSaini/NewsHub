import { ActionTypes } from "../ActionTypes";


const initialState = {
  bookMarkedNews: [{val: "I am empty"}],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SAVE_BOOKMARK:
      return {
        ...state,
        bookMarkedNews: action.payload,
      };
    default:
      return state;
  }
}
export default appReducer;
