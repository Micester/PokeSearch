import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './CelebrationSet.scss';

// Components
import NewCardsDisplay from "../NewCardsDisplay/NewCardsDisplay";

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

class CelebrationSet extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    pokemon.card.all({ q: 'set.name:Celebrations' })
    .then((cards) => {
        // console.log('Celebration Cards (In Order)', cards) // "Base"
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
            <NewCardsDisplay cards={this.state.cards}/>
          </section>
        </section>
      </section >
    );
  }
}

export default CelebrationSet;