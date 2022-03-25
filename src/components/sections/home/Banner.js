import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// import Particles from 'react-particles-js';
// import banner from "../../../data/banner.json";

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            speed: 400,
            autoplaySpeed: 10000,
            focusOnSelect: true,
            cssEase: 'linear',
            swipe: true
        };
        return (
            <div className="slider parallax overlay-bg banner" id="banner-animation" style={{ marginBottom: '40px', borderBottom: '7px solid #152c4b' }}>
                <div className="transform-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Slider className="banner-slider" {...settings}>

                                    <div className="slide-item" >
                                        <div className="relative-item">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <Link to="/personal-loan/1" className="quick-link-box bg-custom-blue">
                                                                <i className="fas fas fa-percent"></i>
                                                                <span className="text">Personal Loan</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-6">
                                                            <Link to="/business-loan/4" className="quick-link-box bg-dark-red">
                                                                <i className="fas fa-hand-holding-usd"></i>
                                                                <span className="text">Business Loan</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-6">
                                                            <Link to="/doctors-loan/5" className="quick-link-box bg-dark-red">
                                                                <i className="fas fas fa-user-lock"></i>
                                                                <span className="text">Doctor Loan</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-sm-12 content">
                                                    <div className="description">
                                                        <h3 className="first">Focus on dreams and fulfill your life desires while we work on your financial needs!</h3>
                                                        <p>Salaried, self-employed or a business owner? We have the best loan product from top Banks & NBFCs to suit your needs. Call us now for a door-step solution!</p>
                                                        <p>&nbsp;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute-img-holder">
                                                <img src="/assets/images/banner/personal-loan-banner.png" alt="Personal, Business and Doctor Loans" style={{ width: '300px' }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slide-item">
                                        <div className="relative-item">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <Link to="/car-loan/6" className="quick-link-box bg-custom-blue marginTop">
                                                                <i className="fas fas fa-percent"></i>
                                                                <span className="text">Car Loan</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-6">
                                                            <Link to="/car-loan/6" className="quick-link-box bg-dark-red marginTop">
                                                                <i className="fas fa-hand-holding-usd"></i>
                                                                <span className="text">Used Car Loan</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-sm-12 content">
                                                    <div className="description">
                                                        <h3 className="second">Accelerate your Future with the drive of your life! Apply today, Drive tomorrow!</h3>
                                                        <p>A brand-new car or a pre-owned one, the choice of car is yours. Worried about how to fund it? Not anymore, our Car Loans is just the answer for that. Apply Now! For a smart, swift and safe car loan solution!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute-img-holder">
                                                <img src="/assets/images/banner/car-loan-banner.png" alt="Car Loans and Used Car Loan" style={{ width: '300px' }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slide-item">
                                        <div className="relative-item">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <Link to="/home-loan/2" className="quick-link-box bg-custom-blue marginTop">
                                                                <i className="fas fas fa-percent"></i>
                                                                <span className="text">Home Loan</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-6">
                                                            <Link to="/mortgage-loan/3" className="quick-link-box bg-dark-red marginTop">
                                                                <i className="fas fa-hand-holding-usd"></i>
                                                                <span className="text">Mortgage Loan</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-sm-12 content">
                                                    <div className="description">
                                                        <h3 className="third">Why rent, when you can Buy! and Why shudder, when you can Mortgage!</h3>
                                                        <p>Be it your first step towards wealth creation through home purchase or a step to making the best use of assets for a financial crisis, we are here to take the step along. Be rest assured to get the best deals through our Home Loan and Mortgage Loan options from the best lenders. Connect with us now! Allow us to help you live better!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute-img-holder">
                                                <img src="/assets/images/banner/homeloan.png" alt="Home Loan and Mortgage Loan" style={{ width: '300px' }} />
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            }, "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 5,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },

                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true,
                        "config_demo": {
                            "hide_card": false,
                            "background_color": "#b61924",
                            "background_image": "",
                            "background_position": "50% 50%",
                            "background_repeat": "no-repeat",
                            "background_size": "cover"
                        }
                    }} /> */}
            </div>
        );
    }
}

export default Banner;