import React from 'react';
import rec from "./../../assets/img/rec.svg"
import Date from "./date";
import ReactPlayer from 'react-player/lazy'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-general">

                    <div style={{position: "relative"}}>
                     <Link to="/about">   <h1 className="header-general-title">Frequently Asked Questions</h1></Link>
                        <img src={rec} alt="img" className="header-general-gen"/>
                    </div>
                    <div className="header-general-square"/>
                </div>
                <div className="header-general-general">
                    <div>
                        <h1 className="header-general-title2">What phones are compatible?</h1>
                        <p className="header-general-item1">TEMIR works with all modern smartphones </p>
                        <p className="header-general-item2">TAP funcion is compatible with NFC
                            enabled Smartphones </p>
                        <ul>
                            <li className="header-general-iphone">I Phones</li>
                            <li className="header-general-iphone"> Android</li>
                        </ul>
                    </div>
                    <ReactPlayer url='https://www.youtube.com/watch?v=QYh6mYIJG2Y' />
                </div>
                {
                    Date.map(el => {
                        return (
                            <div>
                                <h1 className="header-general-how">{el.title}</h1>
                                <p className="header-general-how2">{el.item}</p>
                                <p className="header-general-how2">{el.item2}</p>
                                <p className="header-general-how2">{el.item3}</p>
                                <p className="header-general-how2">{el.item4}</p>
                                <div className="header-general-long">
                                    <p className="header-general-how3">{el.item5}</p>
                                    <p className="header-general-how3">{el.item6}</p>
                                    <p className="header-general-how3">{el.item7}</p>
                                </div>


                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Header;