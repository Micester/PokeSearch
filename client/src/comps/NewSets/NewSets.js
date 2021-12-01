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

      {props.sets.data > 0 &&
        props.sets.data.map((NewSet) => (
          <div className="OldSet-Pokemon" key={NewSet.id}>
            <Link to={`/set/${NewSet.name.toLowerCase()}`}>
              <img className="OldSet-Pokemon" src={NewSet.images.logo} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default NewSets;

