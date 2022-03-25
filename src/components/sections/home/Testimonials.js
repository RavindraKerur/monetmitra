import React, { Component } from 'react';
import Slider from 'react-slick';
import testimonials from '../../../data/testimonial.json';

class Testimonials extends Component {
    render() {
        const setting2 = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            draggable: false,
            dots: false,
            vertical: true,
        }
        return (
            <section className="section-padding"> 
            {/* findrate-bottom */}
                <div className="container dark-red">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonials-box mb-md-80">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black fw-700">Our Testimonials</h3>
                                    </div>
                                </div>
                                <div className="testimonials-wrapper">
                                    <div className="col-12">
                                        <Slider
                                            slidesToShow={1}
                                            swipeToSlide={true} className="testimonial-for row" {...setting2}>
                                            {testimonials.map((item, i) => (
                                                <div key={i} className="slide-item col-12">
                                                    <div className="testimonials-inner">
                                                        <div className="testimonial-content">
                                                            <h4 className="text-custom-blue fw-700 fs-20">{item.title}</h4>
                                                            <p className="text-custom-black mb-xl-20">{item.comment}</p>
                                                            <p className="text-custom-black fw-700"><strong>{item.name}<br />
                                                                <span className="text-light-blue fw-500">{item.designation}</span></strong>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;