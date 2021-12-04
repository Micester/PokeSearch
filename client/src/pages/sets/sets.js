import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './sets.scss';

import AllSets from '../../comps/AllSets/AllSets';
import AllCards from '../../comps/AllCards/AllCards';

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

class SetsPage extends React.Component {
  state = {
    sets: [],
    cards: []
  }

  // Pokmemon did mount
  componentDidMount() {
    this.fetchPokemonSet();
    this.fetchPokemonCard();
  }

  // Fetch Pokemon SETS 
  fetchPokemonSet = () => {
    pokemon.set.all()
      .then((sets) => {
        console.log('Sets props', sets)
        this.setState({ sets: sets });
      })
  }

  // Fetch Pokemon Card
  fetchPokemonCard = () => {
      axios
      .get("https://api.pokemontcg.io/v2/cards")
      .then((cards) => {
        console.log('All Cards', cards)
        this.setState({
          cards: cards
        });
      })
      .catch((error) => console.log(error));
  }

  // Fetch Pokemon Cards by ID 
  //Set Clicked...Cards Sent to clicked set
  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id) {
      if (prevState.cards.id !== id) {
        this.fetchPokemonCard(id);
      }
    }
  }

  render() {
    return (
      <div className="Sets">
        <>
          {/* Body - Pokemon Sets */}
          <AllSets sets={this.state.sets} 
          cards={this.state.cards}/>
          
          <AllCards sets={this.state.sets} 
          cards={this.state.cards}/>
          
        </>
      </div>
    );
  }
}

export default SetsPage;