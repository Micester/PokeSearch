import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import React from "react";
import axios from "axios";
import './sets.scss';

class SetsPage extends React.Component {
  state = {
    sets: []
  }

  componentDidMount() {
    axios.get(`/sets`).then((response) => {
      console.log(response)
      this.setState({sets: response.data});
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
      <div className="Sets">
        <>
        {/* Header */}

        {/* Body - Pokemon Sets */}

        {/* Footer */}
        </>
      </div>
    );
  }
}

export default SetsPage;