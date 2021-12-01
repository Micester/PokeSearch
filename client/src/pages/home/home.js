import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import React from "react";
import axios from "axios";
import './home.scss';

// Components


import SearchPage from "../SearchCards/SearchCards";

import About from "../../comps/About/About";


import OldSetsApi from "../../comps/OldSetsApi/OldSetsApi";
import NewSetsApi from "../../comps/NewSetsApi/NewSetsApi";

import OldBanner from "../../comps/OldBanner/OldBanner";

import NewBanner from "../../comps/NewBanner/NewBanner";

import FossilSet from "../../comps/FossilSet/FossilSet";
import CelebrationSet from "../../comps/CelebrationSet/CelebrationSet";



class HomePage extends React.Component {
  state = {
    sets: [],
  };

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

        {/* Body - Pokemon Sets */}
        <section className="HomeBody">
          {/* Search Bar | Right Side */}
          <section className="Home-Right">
            <SearchPage />
          </section>


          <section className="Home-Left">
            {/* About  | Left Side*/}
            <section className="Home-About">
              <About />
            </section>

            {/* Sets  | Left Side*/}
            <section className="Home-Old">
              <OldSetsApi/>
            </section>
            <section className="Home-New">
              <NewSetsApi/>
            </section>

            <section className="Home-OldBanner">
              <FossilSet/>
              <OldBanner sets={this.state.sets}/>
            </section>

            <section className="Home-NewBanner">
              <CelebrationSet/>
              <NewBanner sets={this.state.sets}/>
            </section>

    
          </section>
        </section>

      </section >
    );
  }
}

export default HomePage;