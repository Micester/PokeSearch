import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './OldSetsApi.scss';


import OldSets from "../OldSets/OldSets";

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

class OldSetsApi extends React.Component {
  state = {
    sets: [],
  };

  componentDidMount() {
    pokemon.set.all({ q: 'series:Base' })
    .then(sets => {
        // console.log('Base Set Set', sets)
        this.setState({ sets: sets });
    })
  }

  render() {
    return (
      <section className="Cards">
        <section className="Home-Left">
          <section className="Home-Left-Cards">
            <OldSets sets={this.state.sets}/>
          </section>
        </section>
      </section >
    );
  }
}

export default OldSetsApi;