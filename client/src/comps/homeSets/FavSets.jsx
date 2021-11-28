import React from "react";
import './FavSets.scss';

function FavSets(props) {
    console.log('homeSets', props);

    return (
        <section className="Home-Fav-Sets">
            <section className="Home-Fav-Sets-Top">
                <div className="Home-Fav-Sets-Top-Heading">
                    <div className="Home-Fav-Sets-Top-Heading-Left">
                        <h1 className="Home-Fav-Sets-Top-Heading-Left-Title">
                            My Favorite Sets
                        </h1>

                        <button className="Home-Fav-Sets-Top-Heading-Right-Button">
                            View All
                        </button>
                    </div>
{/* 
                    <div className="Home-Fav-Sets-Top-Heading-Right">
                        <button className="Home-Fav-Sets-Top-Heading-Right-Button">
                            View All
                        </button>
                    </div> */}
                </div>
            </section>

            <section className="Home-Fav-Sets-Bottom-PokeSet">
                <div className="Home-Fav-Sets-Bottom-PokeSet">
                    <button className="Home-Fav-Sets-Bottom-PokeSet-Button">
                        <img className="Home-Fav-Sets-Bottom-PokeSet-Button-Image" src={props.sets.data[93].images.logo}></img>

                        <p className="Home-Fav-Sets-Bottom-PokeSet-Button-Image__Text">
                            {props.sets.data[93].name}
                        </p>
                    </button>
                </div>

                <div className="Home-Fav-Sets-Bottom-PokeSet">
                    <button className="Home-Fav-Sets-Bottom-PokeSet-Button">
                        <img className="Home-Fav-Sets-Bottom-PokeSet-Button-Image" src={props.sets.data[118].images.logo}></img>

                        <p className="Home-Fav-Sets-Bottom-PokeSet-Button-Image__Text">
                            {props.sets.data[118].name}
                        </p>
                    </button>
                </div>

                <div className="Home-Fav-Sets-Bottom-PokeSet">
                    <button className="Home-Fav-Sets-Bottom-PokeSet-Button">
                        <img className="Home-Fav-Sets-Bottom-PokeSet-Button-Image" src={props.sets.data[123].images.logo}></img>

                        <p className="Home-Fav-Sets-Bottom-PokeSet-Button-Image__Text">
                            {props.sets.data[123].name}
                        </p>
                    </button>
                </div>

                <div className="Home-Fav-Sets-Bottom-PokeSet">
                    <button className="Home-Fav-Sets-Bottom-PokeSet-Button">
                        <img className="Home-Fav-Sets-Bottom-PokeSet-Button-Image" src={props.sets.data[132].images.logo}></img>

                        <p className="Home-Fav-Sets-Bottom-PokeSet-Button-Image__Text">
                            {props.sets.data[132].name}
                        </p>
                    </button>
                </div>

                <div className="Home-Fav-Sets-Bottom-PokeSet">
                    <button className="Home-Fav-Sets-Bottom-PokeSet-Button">
                        <img className="Home-Fav-Sets-Bottom-PokeSet-Button-Image" src={props.sets.data[109].images.logo}></img>

                        <p className="Home-Fav-Sets-Bottom-PokeSet-Button-Image__Text">
                            {props.sets.data[109].name}
                        </p>
                    </button>
                </div>

                <div className="Home-Fav-Sets-Bottom-PokeSet">
                    <button className="Home-Fav-Sets-Bottom-PokeSet-Button">
                        <img className="Home-Fav-Sets-Bottom-PokeSet-Button-Image" src={props.sets.data[100].images.logo}></img>

                        <p className="Home-Fav-Sets-Bottom-PokeSet-Button-Image__Text">
                            {props.sets.data[100].name}
                        </p>
                    </button>
                </div>
            </section>

        </section>
    )
}
export default FavSets;