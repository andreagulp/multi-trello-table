import { FETCH_MEMBERS_NAME } from "../actions/types";
import _ from "lodash";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEMBERS_NAME:
      let newUser = [].concat.apply([], action.payload);
      newUser = _.uniqBy(newUser, "id");

      return newUser;
    default:
      return state;
  }
}
