import { Link } from "react-router-dom";
import React from "react";
import './OldSets.scss';

function OldSets(props) {
  return (

    <section className="Home-Old-Sets-Top">
      <div className="Home-Old-Sets-Top-Heading">
        <div className="Home-Old-Sets-Top-Heading-Left">
          <h1 className="Home-Old-Sets-Top-Heading-Left-Title">
            Old Classics
          </h1>

          <a href="/set" className="Home-Old-Sets-Top-Heading-Right-Button">
            View All
          </a>

        </div>
      </div>

      {props.sets.data > 0 &&
        props.sets.data.map((set) => (
          <div className="OldSet-Pokemon" key={set.id}>
            <Link to={`/set/${set.name.toLowerCase()}`}>
              <img className="OldSet-Pokemon" src={set.images.logo} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default OldSets;

