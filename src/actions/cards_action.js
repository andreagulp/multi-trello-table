import axios from "axios";
import {
  FETCH_CARDS,
  FETCH_CUSTOM_FIELDS,
  FETCH_BOARDS_NAME,
  FETCH_LISTS_NAME
} from "./types";
import { BOARDS_ID } from "../data/boards";

const baseUrl = "https://api.trello.com/1/boards/";
const fields =
  "name,closed,shortUrl,idList,labels,desc,dateLastActivity,idBoard,idList,id,customFieldItems";
const key = "034df4e86e182dcb9744404416df8717";
const token =
  "5e1b83cffcd973a92e2200f36a040f558e47996277821d636d4b4d73e95aef68";

const fullUrlBoard = boardId =>
  `${baseUrl}${boardId}/cards?fields=${fields}&customFieldItems=true&key=${key}&token=${token}`;

const fullUrlCustomFields = boardId =>
  `${baseUrl}${boardId}/customFields?&key=${key}&token=${token}`;

const fullUrlBoardsName = boardId =>
  `${baseUrl}${boardId}/?key=${key}&token=${token}`;

const fullUrlListsName = boardId =>
  `${baseUrl}${boardId}/lists?key=${key}&token=${token}`;

const BOARDS = BOARDS_ID;

export const fetchCards = () => {
  let request = Promise.all(
    BOARDS.map(board =>
      axios
        .get(fullUrlBoard(board.id))
        .then(res => res.data)
        .then(data =>
          data.map(card => {
            // console.log(card.id);
            return {
              ...card,
              dateCreated: new Date(
                1000 * parseInt(card.id.substring(0, 8), 16)
              ),
              customFieldId: card.customFieldItems.map(x => x.idValue)[0]
            };
          })
        )
    )
  );
  console.log("fetchCards request from actions", request);

  return {
    type: FETCH_CARDS,
    payload: request
  };
};

///////////////////custom field

export const fetchCustomFields = () => {
  const request = Promise.all(
    BOARDS.map(board =>
      axios
        .get(fullUrlCustomFields(board.id))
        .then(res => res.data.map(x => x.options))
    )
  );
  console.log("fetchCustomFields request from actions", request);

  return {
    type: FETCH_CUSTOM_FIELDS,
    payload: request
  };
};

export const fetchBoardsName = () => {
  const request = Promise.all(
    BOARDS.map(board =>
      axios.get(fullUrlBoardsName(board.id)).then(res => res.data)
    )
  );
  console.log("fetchBoardsName request from actions", request);

  return {
    type: FETCH_BOARDS_NAME,
    payload: request
  };
};

export const fetchListsName = () => {
  const request = Promise.all(
    BOARDS.map(board =>
      axios.get(fullUrlListsName(board.id)).then(res => res.data)
    )
  );
  console.log("fetchBoardsName request from actions", request);

  return {
    type: FETCH_LISTS_NAME,
    payload: request
  };
};

export const fetchComposed = () => {
  return function(dispatch) {
    return dispatch(fetchCustomFields())
      .then(() => dispatch(fetchBoardsName()))
      .then(() => dispatch(fetchListsName()))
      .then(() => dispatch(fetchCards()));
  };
};
