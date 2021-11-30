import { Link } from "react-router-dom";
import React from "react";

function OldCardsDisplay(props) {

    console.log('OldCards', props)

    return (
        <section>
            <div className="card">
                <a href="/card/Aerodactyl/base3" >
                    <img className="card-Pokemon" src={props.cards[0].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Articuno/base3" >
                    <img className="card-Pokemon" src={props.cards[1].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Ditto/base3" >
                    <img className="card-Pokemon" src={props.cards[2].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Dragonite/base3" >
                    <img className="card-Pokemon" src={props.cards[3].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Gengar/base3" >
                    <img className="card-Pokemon" src={props.cards[4].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Haunter/base3" >
                    <img className="card-Pokemon" src={props.cards[5].images.small}></img>
                </a>
            </div>
        
        </section>
    )
}
export default OldCardsDisplay;

