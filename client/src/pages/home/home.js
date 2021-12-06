import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './home.scss';

// Components

import SearchCards from "../../pages/searchPage/SearchCards";

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

  render() {
    return (
      <section className="Home">
        {/* Search Bar | Right Side */}

        <section className="Home-Right">
          <SearchCards />
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

          <section className="Home-Fossil">
            <OldBanner />
            <FossilSet />
          </section>

          <section className="Home-NewBanner">
            <NewBanner />
            <CelebrationSet />
          </section>

        </section>

      </section >
    );
  }
}
export default HomePage;