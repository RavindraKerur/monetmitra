import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import teamblock from '../../../data/team.json';

class Partners extends Component {
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
            <section className="section-padding doctors-team-style-2">
                <div className="container dark-red">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Partners</h3>
                            <div className="section-description">
                                <p className="text-custom-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 no-padding">
                            <Slider className="doctors-slider" {...settings}>
                                {teamblock.map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="team-block p-relative">
                                            <div className="inner-box">
                                                <div className="image animate-img">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.name} className="full-width" />
                                                </div>
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

export default Partners;