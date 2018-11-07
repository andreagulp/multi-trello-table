import axios from "axios";
import { FETCH_CARDS } from "./types";
import { BOARDS_ID } from "../data/boards";

const baseUrl = "https://api.trello.com/1/boards/";
const fields =
  "name,closed,shortUrl,idList,labels,desc,dateLastActivity,idBoard,idList,id";
const key = "034df4e86e182dcb9744404416df8717";
const token =
  "5e1b83cffcd973a92e2200f36a040f558e47996277821d636d4b4d73e95aef68";

const fullUrl = boardId =>
  `${baseUrl}${boardId}/cards?fields=${fields}&key=${key}&token=${token}`;

const BOARDS = BOARDS_ID;

export const fetchCards = () => {
  let request = Promise.all(
    BOARDS.map(board => axios.get(fullUrl(board.id)).then(res => res.data))
  );

  return {
    type: FETCH_CARDS,
    payload: request
  };
};
