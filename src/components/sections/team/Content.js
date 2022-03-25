import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <section className="section-padding bg-gray">
                <div className="container">
                    <div className="container dark-red">
                        <div className="row no-gutters">
                            <div className="col-xl-9 col-lg-9 col-md-9 about-sec-bg-1">
                                <div className="about-left-side-1">
                                    <div className="section-header">
                                        <div className="section-heading">
                                            <h3 className=" fw-700 text-dark text-uppercase">manjunatha PM</h3>
                                            <p><strong>CEO</strong></p>
                                        </div>
                                    </div>
                                    <p className="fs-14 mb-xl-20">With 15years of domain expertise in finances & insurances has done masters in commerce, is a result driven and self motivated individual spearhead of Moneymithra. He is an ambitious and & optimistic business man  with proven abilities in planning, managing, improving operational effeciency in team building and successful in result oriented operations.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3">
                                <div className="full-height">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/teams/manjunatha.jpeg"} className="img-fluid image-fit" alt="Manjunatha" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container about-sec-second dark-red">
                        <div className="row no-gutters">
                            <div className="col-xl-3 col-lg-3 col-md-3">
                                <div className="full-height ">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/teams/kumari.jpeg"} className="img-fluid image-fit" alt="K N KUMARI" />
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 about-sec-bg">
                                <div className="about-left-side-1 p-relative">
                                    <div className="section-header">
                                        <div className="section-heading">
                                            <h3 className=" fw-700 text-dark text-uppercase">K N KUMARI</h3>
                                            <p><strong>EXECUTIVE DIRECTOR</strong></p>
                                        </div>
                                    </div>
                                    <div className="about-desc">
                                        <p className="mb-xl-20">A graduate with vast experience of 10 years in loans and insurance. She even heads the HR Mitra, an HR consultancy providing HR services. She is also Secretary of Rupeetrees foundation. She has won many awards & accolades for her remarkable acheivement of the targets given in the insurance company.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container dark-red">
                        <div className="row no-gutters">
                            <div className="col-xl-9 col-lg-9 col-md-9 about-sec-bg-1">
                                <div className="about-left-side-1">
                                    <div className="section-header">
                                        <div className="section-heading">
                                            <h3 className=" fw-700 text-dark text-uppercase">D S SUMATHI</h3>
                                            <p><strong>DIRECTOR</strong></p>
                                        </div>
                                    </div>
                                    <p className="fs-14 mb-xl-20">An arts graduate with good experience of 6 years in financial & insurances is leading in the development of progressive organization.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="full-height">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/teams/sumathi.jpg"} className="img-fluid image-fit" alt="D S SUMATHI" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container about-sec-second dark-red">
                        <div className="row no-gutters">
                            <div className="col-xl-3 col-lg-3 col-md-3">
                                <div className="full-height ">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/teams/ramesh.jpg"} className="img-fluid image-fit" alt="RAMESH K M" />
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 about-sec-bg">
                                <div className="about-left-side-1 p-relative">
                                    <div className="section-header">
                                        <div className="section-heading">
                                            <h3 className=" fw-700 text-dark text-uppercase">RAMESH K M</h3>
                                            <p><strong>BUSINESS HEAD</strong></p>
                                        </div>
                                    </div>
                                    <div className="about-desc">
                                        <p className="mb-xl-20">With more than 15years of experience in sales & marketing has done his masters in business administration is a firm believer in 'leading by the example' and taking his team along with the growth path. Renowned for his motivational skills, he knows to assess the pulse of the team and drive the results enhancing each person's strength.</p>
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

export default Content;