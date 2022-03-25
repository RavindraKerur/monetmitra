import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import banner from "../../../data/banner.json";

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 400,
            focusOnSelect: true,
            cssEase: 'linear'
        };
        return (
            <div className="slider video-banner">
                <div className="side-lines"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
                <video playsInline="playsinline" className="jarallax" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={process.env.PUBLIC_URL + "/assets/images/video-bg.mp4"} type="video/mp4" />
                </video>
                <div className="transform-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Slider className="banner-slider" {...settings}>
                                    {banner.map((item, i) => (
                                        <div key={i} className="slide-item">
                                            <div className="banner-text">
                                                <h1 className="text-custom-white fw-700">{item.title}</h1>
                                                <p className="text-custom-white">{item.text}</p>
                                                <Link to="/contact" className="btn-first btn-submit-fill">Explore</Link>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;