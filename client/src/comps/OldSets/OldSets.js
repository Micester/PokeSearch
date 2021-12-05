import { Link } from "react-router-dom";
import React from "react";
import './OldSets.scss';

function OldSets(props) {
  return (
    <section className="Home-Old-Sets-Top">
      <div className="Home-Old-Sets-Top-Heading">
        <h1 className="Home-Old-Sets-Top-Heading-Title">
          Old Classics

          <a href="/set" className="Home-Old-Sets-Top-Heading-Button">
            View All
          </a>
        </h1>
      </div>

      <div className="Home-Old-Sets-Bottom">
        {props.sets.length > 0 &&
          props.sets.map((set) => (
            <div className="Home-Old-Sets-Bottomset" key={set.id}>
              <Link to={`/set/${set.id.toLowerCase()}`}>
                <img className="Home-Old-Sets-Bottomset-Pokemon" src={set.images.logo} />
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
export default OldSets;

