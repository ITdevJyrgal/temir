import React from 'react';
import logo from "./../../assets/img/logo.svg"

import {Link} from "react-router-dom";
import Hero from "./../../pages/about/Hero";

const About = () => {

    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="about-general">
                        <div className="about-general-logo">
                            <Link to="/"> <img src={logo} alt="img" className="about-general-img"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Hero/>
        </div>

    );
};

export default About;

