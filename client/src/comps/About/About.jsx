import React from "react";
import './About.scss';

function About() {

    return (
        <section className="Home-About-Container">
            <section className="Home-New-Sets-Top">
                <div className="Home-New-Sets-Top-Heading">
                    <div className="Home-New-Sets-Top-Heading-Left">
                        <h1 className="Home-New-Sets-Top-Heading-Left-Title">
                            A Little About PokeSearch
                        </h1>
                    </div>
                </div>
            </section>

            <section className="Home-Old-Sets-Bottom-PokeSet">
                <div className="Home-Old-Sets-Bottom-PokeSet-Con">

                    <p className="Home-Old-Sets-Bottom-PokeSet-Con-Link">
                      This is new information about this site and what it does
                    </p>

                </div>
            </section>

        </section>
    )
}
export default About;