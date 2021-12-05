import { Link } from "react-router-dom";
import React from "react";
import './AllSets.scss';

function AllSets(props) {
  return (

    <section className="Sets-All">
      <div className="Sets-All-Series">
        <h1 className="Sets-All-Series">
          {props.sets.length > 0 &&
            props.sets.map((set) => (
              <div className="Sets-All-Series-Names" key={set.id}>
                <h1 className="Sets-All-Series-Names__Text">{set.series}</h1>
              </div>
            ))}
        </h1>
      </div>

      <div className="Sets-All-Box">
        {props.sets.length > 0 &&
          props.sets.map((set) => (
            <div className="Sets-All-Box-Div" key={set.id}>
              <Link to={`/set/${set.name.toLowerCase()}`}>
                <img className="Sets-All-Box-Div-Pokemon" src={set.images.logo} />
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
export default AllSets;





