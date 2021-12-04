import React from "react";
import './Footer.scss';

function Footer() {

    return (
        <section className="Footer-Bar">
            {/* Just for Show */}
            <div className="Footer-Bar-Socials">
                <a href="/" className="Footer-Bar-Socials__Links">Terms of Use</a>
                <a href="/" className="Footer-Bar-Socials__Links">Privacy Policy</a>
            </div>
        </section>
    )
}
export default Footer;