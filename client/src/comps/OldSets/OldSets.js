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
        props.sets.data.map((OldSet) => (
          <div className="OldSet-Pokemon" key={OldSet.id}>
            <Link to={`/set/${OldSet.name.toLowerCase()}`}>
              <img className="OldSet-Pokemon" src={OldSet.images.logo} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default OldSets;

