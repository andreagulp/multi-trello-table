import { createSelector } from "reselect";

const getCards = state => state.cards;

export const getCardsForTable = createSelector([getCards], cards => {
  let tableCards = [];

  cards.map(card => {
    tableCards = [
      ...tableCards,
      [
        card.name,
        card.desc,
        card.dateLastActivity,
        card.idBoard,
        card.idList,
        card.labels.map(label => `${label.name}, `),
        // card.labels.map(label => `${label.name}, `),
        card.shortUrl
      ]
    ];
    return tableCards;
  });
  console.log("tableCards from selector", tableCards);
  return tableCards;
});
