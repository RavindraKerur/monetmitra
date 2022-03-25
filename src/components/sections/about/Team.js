import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import teamblock from '../../../data/team.json';

class Team extends Component {
    render() {
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            loop: true,
            autoplay: true,
            speed: 400,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]
        }
        return (
            <section className="section-padding doctors-team style-2 p-relative">
                <div className="side-lines"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Team</h3>
                            <div className="section-description">
                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 no-padding">
                            <Slider className="doctors-slider" {...settings}>
                                {teamblock.map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="doctor-item">
                                            <div className="doctor-img mb-xl-20">
                                                <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.name} className="full-width" />
                                            </div>
                                            <div className="doctor-content">
                                                <h6><Link to="/team" className="text-custom-black fw-700">{item.name}</Link></h6>
                                                <p className="text-light-white">{item.designation}</p>
                                                <ul className="custom">
                                                    {item.socialmedia.map((item, i) => (
                                                        <li key={i} className={item.iconclass}>
                                                            <Link to={item.url}  >
                                                                <i className={"fab fa-" + item.icon} />
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;