import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './FossilSet.scss';
import OldCardsDisplay from "../OldCardsDisplay/OldCardsDisplay";
pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

class FossilSet extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    pokemon.card.all({ q: 'set.name:Fossil' })
      .then((cards) => {
        console.log('Base-3 Cards (In Order)', cards)
        this.setState({ cards: cards });
      })
  }

  render() {
    return (
      <section className="Home-Fossil-Cards">
        <OldCardsDisplay cards={this.state.cards} />
      </section>
    );
  }
}

export default FossilSet;