import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import { Link } from 'react-router-dom';

const pagelocation = 'Error 404';

class Error extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Money Mithra | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div className="extra-page">
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
                    <div className="ghost"> <span className="text">404</span>
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
                        <div className="error">error</div>
                        <h2>Page not found</h2>
                        <h6 className="text-custom-white">The page you are looking for might have been removed, had its name changed,<br />or is temporarily unavailable.</h6>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Error;