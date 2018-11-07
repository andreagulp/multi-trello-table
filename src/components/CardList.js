import React from "react";

const CardList = React.memo(function({ cards }) {
  return (
    <div>
      <ol>
        {cards.map(card => {
          return <li key={card.id}>{card.name}</li>;
        })}
      </ol>
    </div>
  );
});

export default CardList;
