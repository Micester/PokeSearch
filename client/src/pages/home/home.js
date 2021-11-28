import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import React from "react";
import axios from "axios";
import './home.scss';

// Components
import OldSets from "../../comps/OldSets/OldSets";
import NewSets from "../../comps/NewSets/NewSets";

class HomePage extends React.Component {
  state = {
    sets: []
  }

  componentDidMount() {
    axios.get(`/sets`).then((response) => {
      console.log(response)
      this.setState({ sets: response.data });
    })
  }

  getSets() {
    axios
      .get('/sets')
      .then((response) => {
        this.setState({
          cards: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  getSetsById(id) {
    axios
      .get('/sets/:id')
      .then((response) => {
        this.setState({
          cards: response.data
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id) {
      if (prevState.cards.id !== id) {
        this.getSetsById(id);
      }
    }
  }

  render() {
    return (
      <section className="Home">
        <>
          {/* Header */}

          {/* Body - Pokemon Sets */}
          <section className="Home-Old">
            <OldSets sets={this.state.sets} />
          </section>
          <section className="Home-New">
            <NewSets sets={this.state.sets} />
          </section>

          {/* Footer */}
        </>
      </section>
    );
  }
}

export default HomePage;