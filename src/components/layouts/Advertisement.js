import React, { Component } from 'react';

class Advertisement extends Component {
    render() {
        return (
            <section className="section-padding track-records parallax">
                <div className="container dark-red">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="title text-custom-black fw-700">Our Track Records</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <h3 className="text-custom-black fw-700">500+ crores</h3>
                            <p className="text-light-white">Loan Disbursed</p>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h3 className="text-custom-black fw-700">22,000 +</h3>
                            <p className="text-light-white">Customers</p>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h3 className="text-custom-black fw-700">35+</h3>
                            <p className="text-light-white">Partners</p>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h3 className="text-custom-black fw-700">12+</h3>
                            <p className="text-light-white">Years of Experiences</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Advertisement;