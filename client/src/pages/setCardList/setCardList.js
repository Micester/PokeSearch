import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import pokemon from 'pokemontcgsdk'
import React from "react";
import axios from "axios";
import './setCardList.scss';



pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })


class SetsPage extends React.Component {
    state = {
        cards: [],
    };

    componentDidMount() {
        pokemon.card.all({ q: 'set.name:Fossil' })
            .then((cards) => {
                // console.log('Base-3 Cards (In Order)', cards) // "Base"
                this.setState({ cards: cards });
            })
    }


    render() {
        return (
            <div className="Sets">
                <>

                    {/* Body - Pokemon Sets */}
            
                </>
            </div>
        );
    }
}

export default SetsPage;