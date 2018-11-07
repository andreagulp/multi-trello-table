import { combineReducers } from "redux";
import cardsReducer from "./cards_reducer";

export default combineReducers({
  cards: cardsReducer
});
