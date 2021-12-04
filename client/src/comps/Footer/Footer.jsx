import React from "react";
import './Footer.scss';

function Footer() {

    return (
        <section className="Footer-Bar">
            {/* Just for Show */}
            <div className="Footer-Bar__Title">
                <p className="Footer-Bar__Title__Text"> Footer </p>
            </div>

            <div className="Footer-Bar-Nav">
                <a href="/" className="Footer-Bar-Nav__Link">Terms of Use</a>
                <a href="/" className="Footer-Bar-Nav__Link">Privacy Policy</a>
            </div>
        </section>
    )
}
export default Footer;