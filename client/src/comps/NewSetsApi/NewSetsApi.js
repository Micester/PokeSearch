import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './NewSetsApi.scss';

import NewSets from "../NewSets/NewSets";

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

class NewSetsApi extends React.Component {
  state = {
    sets: [],
  };

  componentDidMount() {
    pokemon.set.all({ q: 'series:Neo' })
      .then(sets => {
        // console.log('Sword & Shield', sets) 
        this.setState({ sets: sets });
      })
  }
  render() {
    return (
      <section className="Home-New-Sets">
        <NewSets sets={this.state.sets} />
      </section >
    );
  }
}
export default NewSetsApi;