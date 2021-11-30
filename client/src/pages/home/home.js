import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import React from "react";
import axios from "axios";
import './home.scss';

// Components


import SearchPage from "../SearchCards/SearchCards";

import About from "../../comps/About/About";

import OldSets from "../../comps/OldSets/OldSets";
import NewSets from "../../comps/NewSets/NewSets";

import OldBanner from "../../comps/OldBanner/OldBanner";

import NewBanner from "../../comps/NewBanner/NewBanner";

import HomeCards from "../HomeCards/HomeCards";



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
              <OldSets sets={this.state.sets} />
            </section>
            <section className="Home-New">
              <NewSets sets={this.state.sets} />
            </section>

            <section className="Home-OldBanner">
              <OldBanner />
              <HomeCards/>
            </section>

            <section className="Home-NewBanner">
              <NewBanner />

            </section>

            {/* Cards Display | Left Side */}
            <section className="Home-Cards">
              {/* <HomeCards/> */}
            </section>
          </section>
        </section>

      </section >
    );
  }
}

export default HomePage;