import React, { Component, Fragment } from 'react';

class Content extends Component {
    render() {
        return (
            <Fragment>
                {/* Start Contact */}
                <section className="section-padding bg-gray contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 mb-md-80">
                                <div className="contact-form full-height align-self-center bx-wrapper bg-custom-white">
                                    <h5 className="text-custom-black fw-600">REGISTERED CORPORATE OFFICE:</h5>
                                    <p className="text-light-white">KANTI COMPLEX, 2927M CH 11</p>
                                    <p className="text-light-white">1ST FLOOR, 1ST MAIN, 5TH CROSS, SARASWATHIPURAM</p>
                                    <p className="text-light-white">MYSURU-570009</p>
                                    <p className="text-light-white">Contact No. :0821 2709-1249</p>
                                    <p className="text-light-white mb-30">Email ID: <a href="mailto: support@moneymithra.com">support@moneymithra.com</a></p>

                                    <h5 className="text-custom-black fw-600">HEAD OFFICE:</h5>
                                    <p className="text-light-white">NO 57, U.P. COMPLEX, 2ND FLOOR,</p>
                                    <p className="text-light-white">DOUBLE ROAD, ABOVE MUTHOOT FINANCE, </p>
                                    <p className="text-light-white">INDIRANAGAR 2ND STAGE, BANGALORE-560038</p>
                                    <p className="text-light-white">Contact No. :+91 9880013358</p>
                                    <p className="text-light-white">Email ID: <a href="mailto: support@moneymithra.com">support@moneymithra.com</a></p>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 bg-custom-white">
                                {/* <iframe className="full-width full-height" title="map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" /> */}
                                <h5 className="text-custom-black fw-600 mt-45"> &nbsp;&nbsp; REGISTERED CORPORATE OFFICE:</h5>
                                <img src={process.env.PUBLIC_URL + "/assets/images/karnataka-map.jpg"} className="full-width" alt="img" />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Content;