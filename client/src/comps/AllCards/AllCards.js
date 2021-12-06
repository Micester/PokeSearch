import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React from "react";
import './AllCards.scss';

const currentURL = window.location.href // returns the absolute URL of a page


function AllCards (props) {
  // const {id} = useParams();
  // const { id } = useParams();
  const location = useLocation();
  location.pathname;

  // console.log(props.location);
  // console.log(props.match);
  // console.log(props.history);
  

  // URLSearchParams(this.props.location.search).get('query_param');

  // let opened_item, param_id;
  // param_id = new
  //   URLSearchParams(this.props.location.search).get('query_param');
  // if (this.state.items) {
  //   opened_item = this.state.items.find(item => item.id ===
  //     param_id);
  // }

  console.log(props.cards.data);
  return (
    <section className="Cards-Set">
      <section className="Home-About-Site-Top">
        <div className="Home-About-Site-Top-Heading">
          <h1 className="Home-About-Site-Top-Heading-Title">
            {/* {id} */}
          </h1>
        </div>
      </section>

      <section className="Home-About-Site-Bottom">
        <div className="Home-About-Site-Bottom-Box">
          <p className="Home-About-Site-Bottom-Box__Text">
            {/* Some Cool information about {id}, how many cards it has, and when it was released. */}
          </p>
        </div>
      </section>

      <section className="Cards-Set-Layout">
        {props.cards.length > 0 &&
          props.cards.map((card) => (
            <div className="card" key={card.id}>
              <Link to={`/set/${card.name.toLowerCase()}`}>
                <img className="card-Pokemon" src={props.cards.data.images.small} w />
              </Link>
            </div>
          ))}
      </section>
    </section>
  );
}


export default AllCards;





