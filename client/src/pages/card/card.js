import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './card.scss';

import AllCards from '../../comps/AllCards/AllCards';


pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })


class CardPage extends React.Component {
  state = {
    cards: [],
  }

  componentDidMount() {
      pokemon.card.all({ q: 'set.name:generations subtypes:mega' })
  .then((cards) => {
      console.log('All Cards', cards)
      this.setState({ cards: cards });
  })
  }

  render() {
    return (
      <div className="Sets">
        <>
          {/* Body - Pokemon Sets */}
          <AllCards cards={this.state.cards}/>
        </>
      </div>
    );
  }
}

export default CardPage;