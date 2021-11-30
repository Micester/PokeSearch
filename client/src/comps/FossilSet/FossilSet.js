import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './FossilSet.scss';

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

// Components
import OldCardsDisplay from "../OldCardsDisplay/OldCardsDisplay";

class FossilSet extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    pokemon.card.all({ q: 'set.name:Fossil' })
    .then((cards) => {
        // console.log('Base-3 Cards (In Order)', cards) // "Base"
        this.setState({ cards: cards });
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { id } = this.props.match.params;
  //   if (id) {
  //     if (prevState.cards.id !== id) {
  //       this.getSetsById(id);
  //     }
  //   }
  // }

  render() {
    return (
      <section className="Cards">
        {/* Cards Display | Left Side */}
        <section className="Home-Left">
          <section className="Home-Left-Cards">
            <OldCardsDisplay cards={this.state.cards}/>
          </section>
        </section>
      </section >
    );
  }
}

export default FossilSet;