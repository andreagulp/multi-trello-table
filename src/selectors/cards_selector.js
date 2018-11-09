import { createSelector } from "reselect";
import moment from "moment";

const getCards = state => state.cards;
const getCustomFields = state => state.customField;
const getBoardsName = state => state.boardsName;
const getListsName = state => state.listsName;
const getMembersName = state => state.membersName;

export const getCardsForTable = createSelector(
  [getCards, getCustomFields, getBoardsName, getListsName, getMembersName],
  (cards, customField, boardsName, listsName, membersName) => {
    let tableCards = [];

    cards.map(card => {
      let pendingReasonName = customField
        .filter(x => x.id === card.pendingReason)
        .map(y => y.value)
        .map(x => x.text);

      let productName = customField
        .filter(x => x.id === card.product)
        .map(y => y.value)
        .map(x => x.text);

      let newBoardsName = boardsName
        .filter(x => x.id === card.idBoard)
        .map(y => y.name);

      let newListsName = listsName
        .filter(x => x.id === card.idList)
        .map(y => y.name);

      let newMemberName = membersName
        .filter(x => x.id === card.idOwner)
        .map(y => y.fullName)
        .map(z => z);

      tableCards = [
        ...tableCards,
        [
          card.name,
          card.desc,
          newBoardsName.toString(),
          newListsName.toString(),
          card.labels.map(label => `${label.name}, `).toString(),
          productName.toString(),
          newMemberName.toString(),
          pendingReasonName.toString(),
          moment().diff(card.dateCreated, "days"),
          card.shortUrl,
          card.dateCreated.toISOString(),
          card.dateLastActivity
        ]
      ];

      return tableCards;
    });
    return tableCards;
  }
);
