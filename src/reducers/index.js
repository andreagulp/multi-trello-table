import { combineReducers } from "redux";
import cardsReducer from "./cards_reducer";
import customField from "./customField_reducer";
import boardsName from "./boardsName_reducer";
import listsName from "./listsName_reducer";

export default combineReducers({
  cards: cardsReducer,
  customField,
  boardsName,
  listsName
});
