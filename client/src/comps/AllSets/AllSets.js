import { Link } from "react-router-dom";
import React from "react";
import './AllSets.scss';


function AllSets(props) {
  console.log('All sets', props)
  return (

    <section className="Sets-All">
      <div className="Sets-All-Box">
        {props.sets.length > 0 &&
          props.sets.map((set) => (
            <div className="Sets-All-Box-Div" key={set.id}>
              <Link to={`/set/${set.id.toLowerCase()}`}>
                <img className="Sets-All-Box-Div-Pokemon" src={set.images.logo} />
                <img className="Sets-All-Box-Div-Pokemon__Symbol" src={set.images.symbol} />
                <h1 className="Sets-All-Box-Div-Pokemon__Text">{set.name}</h1>
                <h1 className="Sets-All-Box-Div-Pokemon__Series">{set.series}</h1>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
export default AllSets;





