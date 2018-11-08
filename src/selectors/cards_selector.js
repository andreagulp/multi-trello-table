import { createSelector } from "reselect";
import moment from "moment";

const getCards = state => state.cards;
const getCustomFields = state => state.customField;
const getBoardsName = state => state.boardsName;
const getListsName = state => state.listsName;

export const getCardsForTable = createSelector(
  [getCards, getCustomFields, getBoardsName, getListsName],
  (cards, customField, boardsName, listsName) => {
    let tableCards = [];

    cards.map(card => {
      let customFieldName = customField
        .filter(x => x.id === card.customFieldId)
        .map(y => y.value)
        .map(x => x.text);

      let newBoardsName = boardsName
        .filter(x => x.id === card.idBoard)
        .map(y => y.name);

      let newListsName = listsName
        .filter(x => x.id === card.idList)
        .map(y => y.name);

      tableCards = [
        ...tableCards,
        [
          card.name,
          card.desc,
          newBoardsName.toString(),
          newListsName.toString(),
          card.labels.map(label => `${label.name}, `).toString(),
          card.shortUrl,
          customFieldName.toString(),
          moment().diff(card.dateCreated, "days"),
          // moment(card.dateCreated).fromNow()
          card.dateCreated.toISOString(),
          card.dateLastActivity
        ]
      ];

      return tableCards;
    });
    console.log("tableCards from selector", tableCards);
    return tableCards;
  }
);
