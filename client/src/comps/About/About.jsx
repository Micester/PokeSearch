import React from "react";
import './About.scss';

function About() {
    return (
        <section className="Home-About-Site">
            <section className="Home-About-Site-Top">
                <div className="Home-About-Site-Top-Heading">
                    <h1 className="Home-About-Site-Top-Heading-Title">
                        A Little About PokeSearch
                    </h1>
                </div>
            </section>

            <section className="Home-About-Site-Bottom">
                <div className="Home-About-Site-Bottom-Box">
                    <p className="Home-About-Site-Bottom-Box__Text">
                        This is new information about this site and what it does
                    </p>
                </div>
            </section>
        </section>
    )
}
export default About;