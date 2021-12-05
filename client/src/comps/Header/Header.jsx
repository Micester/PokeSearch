import React from "react";
import './Header.scss';

function Header() {
    return (
        <section className="Header-Bar">
            <div className="Header-Bar-Logo">
                <a href="/" className="Header-Bar-Logo__Image"></a>
            </div>

            <div className="Header-Bar-Nav">
                <a href="/" className="Header-Bar-Nav__Link">Home</a>
                <a href="/set" className="Header-Bar-Nav__Link">All Sets</a>
            </div>
        </section>
    )
}
export default Header;