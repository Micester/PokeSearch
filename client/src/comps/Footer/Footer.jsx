import React from "react";
import './Footer.scss';

function Footer() {

    return (
        <footer className="Footer-Bar">
            <section className="Footer-Bar__Title">
                <p className="Footer-Bar__Title__Text"> Footer </p>
            </section>

            <section className="Footer-Bar__Nav">
                <a href="/" className="Footer-Bar__Nav__Link">Terms of Use</a>
                <a href="/" className="Footer-Bar__Nav__Link">Privacy Policy</a>
            </section>
        </footer>
    )
}
export default Footer;