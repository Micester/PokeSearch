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
    cards: []
  };


  componentDidMount() {
    this.fetchPokemonCard();
  }

  fetchPokemonCard = () => {
    axios
    .get("/cards")
    .then((cards) => {
      this.setState({
        cards: cards
      });
    })
    .catch((error) => console.log(error));
}


  // componentDidUpdate(prevProps, prevState) {
  //   const { id } = this.props.match.params;
  //   if (id) {
  //     if (prevState.cards && prevState.cards.id !== id) {
  //       this.fetchPokemonCard(id);
  //     }
  //     // if (prevState.cards.id !== id) {
  //     //   this.fetchPokemonCard(id);
  //     // }
  //   }
  // }


  render() {
    return (
      <div className="Cards">
        <>
          <AllCards cards={this.state.cards}/>
        </>
      </div>
    );
  }
}

export default CardPage;