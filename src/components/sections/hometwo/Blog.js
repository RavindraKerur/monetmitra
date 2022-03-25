import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import blogbox from '../../../data/blog.json';

class Blog extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
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
            <section className="section-padding our-articles">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Blog</h3>
                            <div className="section-description">
                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 no-padding">
                            <Slider className="blog-slider" {...settings}>
                                {blogbox.map((item, i) => (
                                    <article key={i} className="col-12 post">
                                        <div className="post-wrapper">
                                            <div className="blog-img animate-img">
                                                <Link to={"/blog-single/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.photo} className="full-width" alt={item.title} />
                                                </Link>
                                            </div>
                                            <div className="blog-meta padding-20">
                                                <div className="post-meta">
                                                    <div className="author-img">
                                                        <img src={process.env.PUBLIC_URL + "/" + item.author.authorphoto} className="rounded-circle" alt={item.author.authorname} />
                                                    </div>
                                                    <div className="author-meta">
                                                        <h6 className="no-margin"><Link to={"/blog-single/" + item.id} className="text-custom-white">{item.author.authorname}</Link></h6>
                                                        <p className="no-margin text-custom-white"><Link to={"/blog-single/" + item.id} className="text-custom-white">Admin</Link> | {item.postdate}</p>
                                                    </div>
                                                </div>
                                                <div className="post-content">
                                                    <h2><Link to={"/blog-single/" + item.id} className="text-custom-black fw-600">{item.title.slice(0,25)}..</Link></h2>
                                                    <p className="text-light-white">{item.shortdesc}</p>
                                                </div>
                                                <div className="blog-links">
                                                    <div className="post-metas"> <span className="mr-2 fs-14"><Link to={"/blog-single/" + item.id} className="text-custom-black"><i className="fas fa-eye text-light-blue" /> {item.views}</Link></span>
                                                        <span className="fs-14"><Link to={"/blog-single/" + item.id} className="text-custom-black"><i className="far fa-comment text-light-blue" /> {item.comments}</Link></span>
                                                    </div> <Link to={"/blog-single/" + item.id} className="text-light-blue fs-14">Read More</Link>
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