import { Link } from "react-router-dom";
import React from "react";
import './AllSets.scss';



function AllSets(props) {


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
export default AllSets;





