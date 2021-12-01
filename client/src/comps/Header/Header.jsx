import React from "react";
import './Header.scss';

function Header() {

    return (
        <section className="Home-Header-Bar">
            <div className="Home-Header-Bar__Title">
                <h1 className="Home-Header-Bar__Title__Text"> Home </h1>
            </div>

            <div className="Home-Header-Bar__Nav">
                <a href="/" className="Home-Header-Bar__Nav__Link">Home</a>
                <br></br>
                <br></br>
                <a href="/set" className="Home-Header-Bar__Nav__Link">All Sets</a>

            </div>
        </section>
    )
}
export default Header;