import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import blogbox from '../../../data/blog.json';

class Blog extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
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
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                    }
                }
            ]
        }
        return (
            <section className="section-padding our_articles bg-custom-blue">
                <div className="container white-line dark-red">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-white fw-700">Our Blog</h3>
                            {/* <div className="section-description">
                                <p className="text-custom-white">Lorem testing Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 no-padding">
                            <Slider className="blog-slider" {...settings}>
                                {blogbox.map((item, i) => (
                                    <article key={i} className="post col-12">
                                        <div className="single-blog">
                                            <div className="post-meta">
                                                <div className="post-date"><Link to={"/blog-single/" + item.id} className="text-custom-white"> {item.postdate}</Link>
                                                </div>
                                            </div>
                                            <div className="blog-photo">
                                                <img src={process.env.PUBLIC_URL + "/" + item.photo} className="full-width" alt={item.title} />
                                            </div>
                                            <div className="post-contnet">
                                                <h2 className="post-title text-custom-black">{item.title}</h2>
                                                <p className="text-light-white">{item.shortdesc.slice(0,70)}...</p>
                                                {/* <div className="post-author"> <span className="text-custom-black fw-500 fs-14">Post by <Link to={"/blog-single/" + item.id} className="text-light-blue">{item.author.authorname}</Link></span>
                                                </div> */}
                                            </div>
                                            <div className="blog-overlay">
                                                <div className="right-text-effect post-content">
                                                    <h2 className="post-title"><Link to={"/blog-single/" + item.id} className="text-white">{item.title}</Link></h2>
                                                    <p>{item.shortdesc.slice(0,100)}...</p>
                                                </div>
                                                <div className="blog-read-more-icon">
                                                    <div className="post-author"> 
                                                    </div> <Link to={"/blog-single/" + item.id} className="fw-500 fs-14">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;