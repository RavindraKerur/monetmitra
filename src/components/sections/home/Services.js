import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from '../../../data/services.json'

class Services extends Component {
    render() {
        return (
            <section className="main-services section-padding p-relative">
                {/* <div className="side-lines"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div> */}
                <div className="container dark-red">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Services</h3>
                        </div>
                        <div className="section-btn"> <Link to="/service" className="btn-first btn-submit text-dark-red">View More</Link>
                        </div>
                    </div>
                    <div className="row">
                        {serviceblock.map((item, i) => (
                            <div key={i} className="col-lg-3 col-sm-6">
                                <div className="main-services-box p-relative mb-xl-30">
                                    <div className="main-service-wrapper padding-20">
                                        <div className="icon-box">
                                            <i className={item.icon} />
                                        </div>
                                        <h5 className="fw-700">
                                            {
                                                item.id === 7 ? <Link to={item.link} className="text-custom-black">{item.title}</Link> : <Link to={item.link + item.id} className="text-custom-black">{item.title}</Link>
                                            }
                                        </h5>
                                        <p className="no-margin">{item.shortdesc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;