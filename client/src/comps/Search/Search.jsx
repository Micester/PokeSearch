import React from "react";
import './Search.scss';

function SearchBar(props) {
    return (
        <div className="Home-Right-Search-Container">
            {/* Search Input */}
            <input className="Home-Right-Search-Container__Bar" id="text" name="text" type="text" placeholder="Search for card ..."></input>
            
            {/* Button */}
            <button className="Home-Right-Search-Container__Button"></button>
        </div>
    )
}
export default SearchBar;