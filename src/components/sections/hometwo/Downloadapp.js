import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const features = [
    {
        icon: "flaticon-live-show",
        title: "Live Advisor",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
        icon: "flaticon-website",
        title: "Get Registration",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
        icon: "flaticon-customer-service",
        title: "Instant Support",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
]

class Downloadapp extends Component {
    render() {
        return (
            <section className="download-app parallax">
                <div className="side-lines right-side style-2"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-header section-padding-top">
                                <div className="section-heading">
                                    <h3 className="text-custom-white fw-700">Download App</h3>
                                    <div className="section-description">
                                        <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="app-img">
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/app.png"} className="img-fluid" alt="app" />
                                </Link>
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/app2.png"} className="img-fluid" alt="app" />
                                </Link>
                            </div>
                            <div className="app-img-btm ">
                                <img src={process.env.PUBLIC_URL + "/assets/images/mobile.png"} className="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="app-img-side">
                                <div className="section-header section-padding-top">
                                    <div className="section-heading">
                                        <h3 className="text-custom-white fw-700">App Features</h3>
                                        <div className="section-description">
                                            <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="app-features section-padding-bottom">
                                    <ul className="custom">
                                        {features.map((item, i) => (
                                            <li key={i}> <i className={item.icon} />
                                                <h5 className="text-light-blue">{item.title}</h5>
                                                <p className="text-custom-white">{item.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Downloadapp;