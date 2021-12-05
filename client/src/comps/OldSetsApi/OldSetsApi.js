import pokemon from 'pokemontcgsdk'
import React from "react"
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
        this.setState({ sets: sets });
      })
  }

  render() {
    return (
      <section className="Home-Old-Sets">
        <OldSets sets={this.state.sets} />
      </section >
    );
  }
}
export default OldSetsApi;