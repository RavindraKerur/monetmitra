import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Servicesidebar';
import Slider from "react-slick";
import serviceblock from '../../../data/services.json';

class Content extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 400,
            focusOnSelect: true,
            cssEase: 'linear'
        }
        return (
            <section className="section-padding bg-gray service-page">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-4 mb-md-80">
                            <Sidebar />
                        </aside>
                        <div className="col-lg-8">
                            <div className="col-12">
                                {serviceblock.filter(service => { return service.id === parseInt(this.props.serviceId) }).map((item, i) => (
                                    <div key={i} className="service-detail-sec bg-custom-white bx-wrapper">
                                        <Slider className="services-detail-slider mb-xl-30" {...settings}>
                                            {item.slider.map((item, i) => (
                                                <div key={i} className="service-image">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.img} className="image-fit" alt={item.text} />
                                                    <div className="overlay overlay-bg-black" />
                                                    <div className="service-text-wrapper transform-center">
                                                        <h3 className="text-custom-white">{item.text}</h3>
                                                        <Link to="/finance" className="btn-first btn-submit">Make Apply Today</Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                        <div className="service-meta mb-xl-30">
                                            <h2 className="text-custom-black fw-600">{item.title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: item.longdescription }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;