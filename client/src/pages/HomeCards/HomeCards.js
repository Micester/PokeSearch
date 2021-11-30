import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './HomeCards.scss';

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

// Components
import OldCardsDisplay from "../../comps/OldCardsDisplay/OldCardsDisplay";



class HomeCards extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    pokemon.card.all({ q: 'set.name:Fossil' })
    .then((cards) => {
        // console.log('Base-3 props', cards) // "Base"
        this.setState({ cards: cards });
    })
  }

  // getCards() {
  //   axios
  //   pokemon.card.all({ q: 'subtypes:mega', orderBy: '-set.releaseDate' })
  //     .then(result => {
  //       console.log(result.data[0].name)
  //     })
  //     .catch((error) => console.log(error));
  // }

  // componentDidMount() {
  //   axios.get(`/cards`).then((response) => {
  //     console.log(response)
  //     this.setState({ cards: response.data });
  //   })
  // }

  getCards() {
    axios
      .get({ q: 'subtypes:mega', orderBy: '-set.releaseDate' })
      .then((response) => {
        this.setState({
          cards: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  getCardsById(id) {
    axios
      .get('/cards/:id')
      .then((response) => {
        this.setState({
          cards: response.data
        });
      })
      .catch((error) => console.log(error));
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

export default HomeCards;