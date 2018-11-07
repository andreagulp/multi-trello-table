import { FETCH_CARDS } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return [].concat.apply([], action.payload);
    default:
      return state;
  }
}
