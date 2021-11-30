import React from "react";
import './NewSets.scss';

function NewSets(props) {
    return (
        <section className="Home-New-Sets">
            <section className="Home-New-Sets-Top">
                <div className="Home-New-Sets-Top-Heading">
                    <div className="Home-New-Sets-Top-Heading-Left">
                        <h1 className="Home-New-Sets-Top-Heading-Left-Title">
                            New Era
                        </h1>

                        <a href="/new-era"className="Home-New-Sets-Top-Heading-Right-Button">
                            View All
                        </a>
                    </div>
                </div>
            </section>

            <section className="Home-New-Sets-Bottom-PokeSet">
                <div className="Home-New-Sets-Bottom-PokeSet-Con">

                    {/* <a className="Home-New-Sets-Bottom-PokeSet-Con-Link" href="/sets/SWSH8-Fusion-Strike" title="Fusion Strike Set">
                        <img className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[132].images.logo}></img>

                        <span className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[132].name}</span>
                    </a>

                    <a className="Home-New-Sets-Bottom-PokeSet-Con-Link" href="/sets/25TH-Celebrations" title="Celebrations Set">
                        <img className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[124].images.logo}></img>

                        <span className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[124].name}</span>
                    </a>

                    <a className="Home-New-Sets-Bottom-PokeSet-Con-Link" href="/sets/SWSH7-Evolving-Skies" title="Evolving Skies Set">
                        <img className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[123].images.logo}></img>
                        
                        <span className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[123].name}</span>
                    </a>

                    <a className="Home-New-Sets-Bottom-PokeSet-Con-Link" href="/sets/CRE-Chilling-Reign" title="Chilling Reign Set">
                        <img className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[122].images.logo}></img>

                        <span className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[122].name}</span>
                    </a>

                    <a className="Home-New-Sets-Bottom-PokeSet-Con-Link" href="/sets/SWSH05-Battle-Styles" title="Battle Styles Set">
                        <img className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[121].images.logo}></img>

                        <span className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[121].name}</span>
                    </a>

                    <a className="Home-New-Sets-Bottom-PokeSet-Con-Link" href="/sets/SWSH45-Shining-Fates" title="Shining Fates Set">
                        <img className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image" src={props.sets.data[119].images.logo}></img>

                        <span className="Home-New-Sets-Bottom-PokeSet-Con-Link-Image__Text">{props.sets.data[119].name}</span>
                    </a> */}

                </div>
            </section>
        </section>
    )
}
export default NewSets;