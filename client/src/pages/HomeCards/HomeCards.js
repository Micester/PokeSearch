import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import React from "react";
import axios from "axios";
import './HomeCards.scss';

// Components
import OldCards from "../../comps/OldCards/OldCards";
import NewCards from "../../comps/NewCards/NewCards";

class HomeCards extends React.Component {
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
        {/* Cards Display | Left Side */}
        <section className="Home-Left">
          <section className="Home-Left-Cards">
            <OldCards cards={this.state.cards} />
          </section>
        </section>
      </section >
    );
  }
}

export default HomeCards;