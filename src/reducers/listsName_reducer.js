import { FETCH_LISTS_NAME } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LISTS_NAME:
      console.log("FETCH_LISTS_NAME from actions", state);
      return [].concat.apply([], action.payload);
    default:
      return state;
  }
}
