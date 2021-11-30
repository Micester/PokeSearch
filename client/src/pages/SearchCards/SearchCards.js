import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import React from "react";
import axios from "axios";
import './SearchCards.scss';

// Components
import SearchBar from "../../comps/Search/Search";

class SearchPage extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    axios.get(`/cards`).then((response) => {
      console.log(response)
      this.setState({ cards: response.data });
    })
  }

  getSets() {
    axios
      .get('/cards')
      .then((response) => {
        this.setState({
          cards: response.data,
        });
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