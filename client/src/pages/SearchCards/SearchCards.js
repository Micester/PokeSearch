import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './SearchCards.scss';

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

// Components
import SearchBar from "../../comps/Search/Search";

class SearchPage extends React.Component {
  state = {
    cards: [],
  };

  // componentDidMount() {
  //   pokemon.card.all()
  //     .then((cards) => {
  //       console.log(cards) // "Blastoise"
  //       this.setState({ cards: cards.data });
  //     })
  // }

  getCards() {
    axios
    pokemon.card.all({ q: 'subtypes:mega', orderBy: '-set.releaseDate' })
      .then(result => {
        console.log(result.data[0].name)
      })
      .catch((error) => console.log(error));
  }

  getSetsById(id) {
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
          {/* Search Bar | Right Side */}
          <section className="Home-Right">
            <section className="Home-Right-Search">
              <SearchBar cards={this.state.cards} />
            </section>
          </section>
          
      </section >
    );
  }
}

export default SearchPage;