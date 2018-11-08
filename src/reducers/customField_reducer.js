import { FETCH_CUSTOM_FIELDS } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CUSTOM_FIELDS:
      let newCustomFields = [].concat.apply([], action.payload);

      return [].concat.apply([], newCustomFields);

    default:
      return state;
  }
}
