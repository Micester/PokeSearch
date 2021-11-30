import React from "react";
import { Link } from "react-router-dom";
import './OldCards.scss';

import OldCardsDisplay from "../OldCardsDisplay/OldCardsDisplay";


function OldCards(props) {
    console.log('OldCards', props);


    return (

        <>
            {props.cards.data.all({ q: 'subtypes:mega', orderBy: '-set.releaseDate' })
                .then(result => {
                    console.log(result.data[0].name)
                })

                //                 < Link to={"/cards/" + data.title} className="Card" key={data.id}>
                //             <ul className="Card-Lists">
                //                 <OldCardsDisplay
                //                     id={data.id}
                //                     name={data.name}
                //                     images={data.images}
                //                     set={data.set}
                //                     albumObj={data}
                //                 />
                //             </ul>
                //         </Link>
                // ]
            }

        </>
        // <section className="Home-Old-Sets">
        //     <div class="card">
        //         <a href="/card/Aerodactyl-Foxxil-Fo-1">
        //             {/* <img src={props.cards.data[1].images.small}></img> */}
        //         </a>
        //     </div>
        // </section>

    )
}
export default OldCards;