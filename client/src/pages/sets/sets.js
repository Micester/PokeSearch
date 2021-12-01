import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './sets.scss';

import AllSets from '../../comps/AllSets/AllSets';


pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })


class SetsPage extends React.Component {
  state = {
    sets: [],
    cardSets: []
  }

  // Pokmemon did mount
  componentDidMount() {
    this.fetchPokemonSet();
  }



  // Fetch Pokemon SETS 

  fetchPokemonSet = () => {
    pokemon.set.all()
      .then((sets) => {
        console.log('Sets props', sets)
        this.setState({ sets: sets });
      })
  }

  // fetchPokemonCardsById

  fetchPokemonSet = (id) => {
    pokemon.set.all()
      .then((sets) => {
        console.log('Sets props', sets)
        this.setState({ sets: sets });
      })

    pokemon.card.all({ q: 'set.id:sm1', orderBy: '-set.releaseDate' })
      .then(cardSets => {
        console.log("All cardSets", cardSets)
      })
  }



  // Fetch Pokemon Cards by ID 



  // componentDidMount() {
  //   pokemon.set.all()
  //     .then((sets) => {
  //       console.log('Sets props', sets)
  //       this.setState({ sets: sets });
  //     })
  // }

  render() {
    return (
      <div className="Sets">
        <>

          {/* Body - Pokemon Sets */}
          <AllSets sets={this.state.sets}
            cardSets={this.state.cardSets} />
        </>
      </div>
    );
  }
}

export default SetsPage;