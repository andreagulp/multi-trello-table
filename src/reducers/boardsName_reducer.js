import { FETCH_BOARDS_NAME } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS_NAME:
      console.log("FETCH_BOARDS_NAME from actions", state);
      return action.payload;
    default:
      return state;
  }
}
