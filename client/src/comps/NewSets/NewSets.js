import { Link } from "react-router-dom";
import React from "react";
import './NewSets.scss';

function NewSets(props) {
  return (
    <section className="Home-New-Sets-Top">
      <div className="Home-New-Sets-Top-Heading">
        <h1 className="Home-New-Sets-Top-Heading-Title">
          Neo Era

          <a href="/set" className="Home-New-Sets-Top-Heading-Button">
            View All
          </a>
        </h1>
      </div>

      <div className="Home-New-Sets-Bottom">
        {props.sets.length > 0 &&
          props.sets.map((set) => (
            <div className="Home-New-Sets-Bottomset" key={set.id}>
              <Link to={`/set/${set.name.toLowerCase()}`}>
                <img className="Home-Old-Sets-Bottomset-Pokemon" src={set.images.logo} />
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
export default NewSets;

