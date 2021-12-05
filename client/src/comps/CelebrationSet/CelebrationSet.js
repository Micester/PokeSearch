import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './CelebrationSet.scss';
import NewCardsDisplay from "../NewCardsDisplay/NewCardsDisplay";
pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

class CelebrationSet extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    pokemon.card.all({ q: 'set.name:Destiny' })
      .then((cards) => {
        this.setState({ cards: cards });
      })
  }

  render() {
    return (
      <section className="Home-Destiny-Cards">
        <NewCardsDisplay cards={this.state.cards} />
      </section>
    );
  }
}
export default CelebrationSet;