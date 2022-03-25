import React, { Component } from 'react';

class Bookappointment extends Component {
    render() {
        return (
            <section className="book-appointment parallax section-padding" id="book-appointment">
                <div className="overlay overlay-bg-black" />
                <div className="pattern" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="appointment-sec">
                                <div className="row no-gutters">
                                    <div className="col-lg-6 ">
                                        <div className="padding-40 full-height bg-white">
                                            <div className="align-self-center">
                                                <div className="section-heading">
                                                    <h3 className="text-custom-blue fw-600">Apply for Loans!</h3>
                                                </div>
                                                <p className="text-dark">MoneyMithra is your partner for all your financial needs. We understand the hustle one goes through with the upheavals of life and uncertain challenges you are faced with on a day-to- day basis. With our services, we wish to be that friend you can turn to who irons out the stress these situations throw at you.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-side full-height">
                                            <div className="section-heading">
                                                <h3 className="text-white fw-600">Reach Us</h3>
                                            </div>
                                            <form className="form-style-2 form-style-3">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <div className="input-group"> <span className="input-group-preappend"><i className="fas fa-user" /></span>
                                                                <input type="text" name="#" className="form-control" placeholder="Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <div className="input-group"> <span className="input-group-preappend"><i className="fas fa-envelope" /></span>
                                                                <input type="email" name="#" className="form-control" placeholder="Email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <div className="input-group"> <span className="input-group-preappend"><i className="fas fa-phone-alt" /></span>
                                                                <input type="text" name="#" className="form-control" placeholder="Phone" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <div className="input-group"> <span className="input-group-preappend"><i className="fab fa-fort-awesome" /></span>
                                                                <input type="text" name="#" className="form-control" placeholder="City" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn-first btn-submit full-width">Apply Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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

export default Bookappointment;