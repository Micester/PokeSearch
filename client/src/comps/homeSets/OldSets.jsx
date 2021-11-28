import React from "react";
import './OldSets.scss';

function OldSets(props) {
    console.log('OldSets', props);

    return (
        <section className="Home-Old-Sets">
            <section className="Home-Old-Sets-Top">
                <div className="Home-Old-Sets-Top-Heading">
                    <div className="Home-Old-Sets-Top-Heading-Left">
                        <h1 className="Home-Old-Sets-Top-Heading-Left-Title">
                            Old Relics
                        </h1>

                        <button className="Home-Old-Sets-Top-Heading-Right-Button">
                            View All
                        </button>
                    </div>
                </div>
            </section>

            <section className="Home-Old-Sets-Bottom-PokeSet">
                <div className="Home-Old-Sets-Bottom-PokeSet-Con">
                    <a class="Home-Old-Sets-Bottom-PokeSet-Con-Link" href="/sets/BS-Base-Set" title="Base Set Set">
                        <img className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[0].images.logo}></img>

                        <span className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[0].name}</span>
                    </a>

                    <a class="Home-Old-Sets-Bottom-PokeSet-Con-Link" href="/sets/JU-Jungle" title="Jungle Set">
                        <img className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[1].images.logo}></img>

                        <span className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[1].name}</span>
                    </a>

                    <a class="Home-Old-Sets-Bottom-PokeSet-Con-Link" href="/sets/WOTC-Wizards-of-the-Coast-Promos" title="Wizards of the Coast Promos Set">
                        <img className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[2].images.logo}></img>
                        
                        <span className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[2].name}</span>
                    </a>

                    <a class="Home-Old-Sets-Bottom-PokeSet-Con-Link" href="/sets/FO-Fossil" title="Fossile Set">
                        <img className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[3].images.logo}></img>

                        <span className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[3].name}</span>
                    </a>

                    <a class="Home-Old-Sets-Bottom-PokeSet-Con-Link" href="/sets/B2-Base-Set-2" title="Base Set 2 Set">
                        <img className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[4].images.logo}></img>

                        <span className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[4].name}</span>
                    </a>

                    <a class="Home-Old-Sets-Bottom-PokeSet-Con-Link" href="/sets/TR-Team-Rocket" title="Team Rocket Set">
                        <img className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[5].images.logo}></img>

                        <span className="Home-Old-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[5].name}</span>
                    </a>
                </div>
            </section>
        </section>
    )
}
export default OldSets;