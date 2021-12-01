import { Link } from "react-router-dom";
import React from "react";
import './OldSets.scss';

function OldSets(props) {


  return (
    <section>
      {props.sets.length > 0 &&
        props.sets.map((set) => (
          <div className="set" key={set.id}>
            <Link to={`/set/${set.name.toLowerCase()}`}>
              <img className="set-Pokemon" src={set.images.logo} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default OldSets;





// function OldSets(props) {
//     console.log('Old Sets ', props);

//     return (
//         <section className="Home-Old-Sets">
//             <section className="Home-Old-Sets-Top">
//                 <div className="Home-Old-Sets-Top-Heading">
//                     <div className="Home-Old-Sets-Top-Heading-Left">
//                         <h1 className="Home-Old-Sets-Top-Heading-Left-Title">
//                             Old Classics
//                         </h1>

//                         <a href="/old-classics" className="Home-Old-Sets-Top-Heading-Right-Button">
//                             View All
//                         </a>

//                     </div>
//                 </div>
//             </section>

//             <section className="Home-Old-Sets-Bottom-PokeSet">
//                 <div className="Home-Old-Sets-Bottom-PokeSet-Con">

                   
//                 </div>
//             </section>
//         </section>
//     )
// }
// export default OldSets;