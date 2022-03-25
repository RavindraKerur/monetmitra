import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import branches from '../../data/branches.json';
import HeaderComponent from '../../helper/Navigationhelper';
import blogbox from '../../data/blog.json';
import Slider from 'react-slick';

class Footer extends HeaderComponent {
    render() {
        const classNames = this.state.isTop ? 'd-block' : '';
        const branchSettings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            vertical: true,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            cssEase: 'linear',
            pauseOnHover: true
        }
        return (
            <Fragment>
                <footer className="bg-black section-padding footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-md-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Useful Links</h4>
                                    </div>
                                    <ul className="custom links">
                                        <li> <Link to="/about" className="text-custom-white">About Us</Link>
                                        </li>
                                        <li> <Link to="/service" className="text-custom-white">Service</Link>
                                        </li>
                                        <li> <Link to="/blog" className="text-custom-white">Blog</Link>
                                        </li>
                                        <li> <Link to="/team" className="text-custom-white">Team</Link>
                                        </li>
                                        <li> <Link to="/contact" className="text-custom-white">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-md-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Featured Post</h4>
                                    </div>
                                    <ul className="custom popular_post">
                                        {blogbox.slice(0, 2).map((item, i) => (
                                            <li key={i}>
                                                <div className="post">
                                                    <div className="post-wrapper">
                                                        <div className="popular_post_img animate-img">
                                                            <Link to={"/blog-single/" + item.id}>
                                                                <img src={process.env.PUBLIC_URL + "/" + item.photo} className="img-fluid image-fit" alt={item.title} />
                                                            </Link>
                                                        </div>
                                                        <div className="popular_post_title">
                                                            <h6><Link to={"/blog-single/" + item.id} className="text-custom-white fs-14 fw-400">{item.title}</Link></h6>
                                                            <div className="post-date">
                                                                <p className="text-white no-margin">{item.postdate}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-xs-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Office</h4>
                                    </div>
                                    <div className="office-address">
                                        <p><strong>Head Office - Mysuru</strong></p>
                                        <p>Kanti Complex, #2927, CH-11, 1st Floor,</p>
                                        <p>1st Main Road, 5th Cross,</p>
                                        <p>Saraswathipuram, Mysuru - 570 009</p>
                                    </div>
                                    <hr />
                                    <div className="office-address">
                                        <p><strong>Branch Office - Bangalore</strong></p>
                                        <p>No. 223, 2nd Floor, G.R Arcade</p>
                                        <p>14th cross, Sampige Road, Malleswaram,</p>
                                        <p>Bengaluru - 560 003</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Branches</h4>
                                    </div>
                                    <Slider className="custom twitter-feed twitter-slider" {...branchSettings}>
                                        {branches.map((item, i) => (
                                            <li key={i}>
                                                <p className="text-white">{item.branchName}</p>
                                            </li>
                                        ))}
                                    </Slider>
                                    <div className="social-media">
                                        <ul className="custom social-media">
                                            <li><a href="https://www.facebook.com/MoneyMithra" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a>
                                            </li>
                                            <li><a href="https://www.instagram.com/moneymithr/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                                            </li>
                                            <li><a href="https://twitter.com/moneymithra" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
                                            </li>
                                            <li><a href="https://www.linkedin.com/in/money-mithra-344b11215/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-lg-6">
                                <div className="payment-logo mb-md-20"> <span className="text-custom-white fs-14 mr-3">We are accept</span>
                                    <div className="payemt-icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/footer-bottom-img.png"} alt="#" />
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-12">
                                <p className="text-custom-white no-margin">© MoneyMithra - 2021 | All Right Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer */}
                <div id="back-top" className={`back-top ${classNames}`}>
                    <Link to="#" onClick={() => this.scrollToTop()}><i className="flaticon-up-arrow" /></Link>
                </div>
            </Fragment>
        );
    }
}

export default Footer;