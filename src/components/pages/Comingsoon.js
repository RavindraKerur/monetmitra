import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import { Link } from 'react-router-dom';
import Timer from '../layouts/Timer';

const pagelocation = 'Coming Soon';

class Comingsoon extends Component {
    render() {
        const startDate = new Date().getTime() + 31536000000;
        return (
            <Fragment>
                <MetaTags>
                    <title>Money Mithra | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div className="extra-page coming-soon">
                    <div className="header">
                        <Link to="/" className="logo">
                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                        </Link>
                        <Link to="#"> <i className="fab fa-facebook-f" />
                        </Link>
                        <div className="divider" />
                        <Link to="#"> <i className="fab fa-twitter" />
                        </Link>
                        <Link to="/"> <i className="fas fa-arrow-left" />
                        </Link>
                    </div>
                    <div className="ghost"> <span className="text">Coming Soon</span>
                        <div className="eye" />
                        <div className="eye two" />
                        <div className="mouth" />
                        <div className="corner" />
                        <div className="corner two" />
                        <div className="corner three" />
                        <div className="corner four" />
                        <div className="over" />
                        <div className="over two" />
                        <div className="over three" />
                        <div className="over four" />
                        <div className="shadow" />
                    </div>
                    <div className="main">
                        <div className="error">Coming Soon</div>
                        <h2>Our Website is Under Development</h2>
                        <h6 className="text-custom-white">We are Coming Soon...</h6>
                        <Timer startDate={startDate} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Comingsoon;