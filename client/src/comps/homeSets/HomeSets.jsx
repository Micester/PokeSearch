import React from "react";
import './HomeSets.scss';

function HomeSets(props) {
    console.log('homeSets', props);

    return (
        <section className="Home-Sets">
            <h1>This is the Home Sets Sections
                <br></br>
                <br></br>
                It will display 6 "Hot sets"
                and the sets below with some display cards
            </h1>
            <div className="Home-Sets">
                <button className="Home-Sets-Button">
                    <img className="Home-Sets-Button-Image" src={props.sets.data[93].images.logo}></img>
                    
                    <p className="Home-Sets-Button-Image__Text">
                        {props.sets.data[93].name}
                    </p>
                </button>
            </div>
            
            <div className="Home-Sets">
                <button className="Home-Sets-Button">
                    <img className="Home-Sets-Button-Image" src={props.sets.data[118].images.logo}></img>
                    
                    <p className="Home-Sets-Button-Image__Text">
                        {props.sets.data[118].name}
                    </p>
                </button>
            </div>
            <div className="Home-Sets">
                <button className="Home-Sets-Button">
                    <img className="Home-Sets-Button-Image" src={props.sets.data[123].images.logo}></img>
                    
                    <p className="Home-Sets-Button-Image__Text">
                        {props.sets.data[123].name}
                    </p>
                </button>
            </div>
           

        </section>
    )
}

export default HomeSets