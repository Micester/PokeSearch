import React from "react";
import './Search.scss';



function SearchBar(props) {
    // console.log('SearchBar', props);

    

    return (
        <div className="Home-Right-Search-Container">
            <input className="Home-Right-Search-Container__Bar" id="text" name="text" type="text" placeholder="Search"></input>
        </div>
    )
}
export default SearchBar;