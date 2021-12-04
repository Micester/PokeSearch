import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './SearchCards.scss';

// Components
import SearchBar from "../../comps/Search/Search";

// Api
pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' });

class SearchCards extends React.Component {
  state = {
    cards: [],
  };

  // componentDidMount = () => {
  //   pokemon.card.all({ orderBy: '-set.releaseDate' })
  //   .then(cards => {
  //       console.log(cards)
  //   })
  // }

  componentDidMount = () => {
    axios
    .get("/cards")
    .then((cards) => {
      console.log('All Cards', cards)
      this.setState({
        cards: cards.data
      });
    })
    .catch((error) => console.log(error));
}


  render() {
    return (
      <section className="Cards">
        {/* Search Bar | Right Side */}
        <section className="Home-Right">
          <section className="Home-Right-Search">
            <SearchBar cards={this.state.cards}/>
          </section>
        </section>

      </section >
    );
  }
}

export default SearchCards;