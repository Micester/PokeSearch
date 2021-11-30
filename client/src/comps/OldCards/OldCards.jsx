import React from "react";
import './OldCards.scss';

function OldCards(props) {
    console.log('OldCards', props);

    return (
        <section className="Home-Old-Sets">
            <div class="card">
                <a href="/card/Aerodactyl-Foxxil-Fo-1">
                    <img src={props.cards.data[1].images.small}></img>
                </a>
            </div>
        </section>
    )
}
export default OldCards;