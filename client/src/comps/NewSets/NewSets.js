import { Link } from "react-router-dom";
import React from "react";
import './NewSets.scss';

function NewSets(props) {
  return (

    <section className="Home-New-Sets-Top">
      <div className="Home-New-Sets-Top-Heading">
        <div className="Home-New-Sets-Top-Heading-Left">
          <h1 className="Home-New-Sets-Top-Heading-Left-Title">
            New Era
          </h1>

          <a href="/set" className="Home-New-Sets-Top-Heading-Right-Button">
            View All
          </a>

        </div>
      </div>

      {props.sets.length > 0 &&
        props.sets.map((set) => (
          <div className="set-Pokemon" key={set.id}>
            <Link to={`/set/${set.name.toLowerCase()}`}>
              <img className="set-Pokemon" src={set.images.logo} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default NewSets;

