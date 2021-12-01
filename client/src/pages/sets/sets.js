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
    sets: []
  }

  componentDidMount() {
    pokemon.set.all()
    .then((sets) => {
        console.log('Sets props', sets) 
        this.setState({ sets: sets });
    })
  }
 

  render() {
    return (
      <div className="Sets">
        <>

        {/* Body - Pokemon Sets */}
        <AllSets sets={this.state.sets} />
        </>
      </div>
    );
  }
}

export default SetsPage;