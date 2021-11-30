import { Link } from "react-router-dom";
import React from "react";

function NewCardsDisplay(props) {
    console.log('NewCardsDisplay', props)

    return (
        <section>
           <div className="card">
                <a href="/card/Ho-Oh/25th-Celebrations" >
                    <img className="card-Pokemon" src={props.cards[0].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Reshiram/25th-Celebrations" >
                    <img className="card-Pokemon" src={props.cards[1].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Kyogre/25th-Celebrations" >
                    <img className="card-Pokemon" src={props.cards[2].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Palkia/25th-Celebrations" >
                    <img className="card-Pokemon" src={props.cards[3].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Pikachu/25th-Celebrations" >
                    <img className="card-Pokemon" src={props.cards[4].images.small}></img>
                </a>
            </div>

            <div className="card">
                <a href="/card/Flying-Pkachu-V/25th-Celebrations" >
                    <img className="card-Pokemon" src={props.cards[5].images.small}></img>
                </a>
            </div>
        
        </section>
    )
}
export default NewCardsDisplay;

