import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './home.scss';

// Components

import SearchPage from "../searchCards/SearchCards";

import About from "../../comps/About/About";

import OldSetsApi from "../../comps/OldSetsApi/OldSetsApi";
import NewSetsApi from "../../comps/NewSetsApi/NewSetsApi";

import OldBanner from "../../comps/OldBanner/OldBanner";
import NewBanner from "../../comps/NewBanner/NewBanner";

import FossilSet from "../../comps/FossilSet/FossilSet";
import CelebrationSet from "../../comps/CelebrationSet/CelebrationSet";

// Pokemon Api__Key
pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })



class HomePage extends React.Component {
  state = {
    cards: [],
  };

  // componentDidMount() {
  // pokemon.card.all()
  // .then((cards) => {
  //     console.log('All Cards (In Order)', cards) // "Base"
  //     this.setState({ cards: cards });
  // })
  // }

  render() {
    return (
      <section className="Home">
        {/* Search Bar | Right Side */}
        <section className="HomeBody">
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
              <OldSetsApi />
            </section>
            <section className="Home-New">
              <NewSetsApi />
            </section>

            <section className="Home-OldBanner">
              <FossilSet />
              <OldBanner />
            </section>

            <section className="Home-NewBanner">
              <CelebrationSet />
              <NewBanner />
            </section>

          </section>
        </section>
      </section >
    );
  }
}
export default HomePage;