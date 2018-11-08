import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/cards_action";
import ErrorBoundary from "../components/ErrorBoundary";
// import CardList from "../components/CardList";
import CardsTable from "../components/CardsTable";
import { getCardsForTable } from "../selectors/cards_selector";

function Dashboard({ cards, tableCards, fetchComposed }) {
  useEffect(() => {
    fetchComposed();
  }, []);

  return (
    <div>
      <ErrorBoundary>
        <CardsTable tableCards={tableCards} />
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = state => {
  return { cards: state.cards, tableCards: getCardsForTable(state) };
};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
