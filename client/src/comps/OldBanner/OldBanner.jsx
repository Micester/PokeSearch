import React from "react";
import './OldBanner.scss';

function OldBanner() {
    return (
        <section className="Home-Old-Sets">
            <section className="Home-Old-Sets-Top">
                <div className="Home-Old-Sets-Top-Heading">
                    <div className="Home-Old-Sets-Top-Heading-Left">
                        <h1 className="Home-Old-Sets-Top-Heading-Left-Title">
                            Fossil 
                        </h1>

                        <a href="/sets/FO-Fossil" className="Home-Old-Sets-Top-Heading-Right-Button">
                            View More
                        </a>

                    </div>
                </div>
            </section>
        </section>
    )
}
export default OldBanner;