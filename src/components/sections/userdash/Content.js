import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Collapse } from 'react-bootstrap';
import Loanprogress from './Loanprogress';
import Loandetails from './Loandetails';

class Content extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            open: true,
        }
    };
    render() {
        const { open } = this.state;
        return (
            <Fragment>
                <div>
                    <section className="section-padding user-dashboard-sec bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="dashboard-first-sec">
                                        <div className="row">
                                            <div className="col-lg-6 align-self-center">
                                                <div className="left-side mb-md-80">
                                                    <h3><Link to="#" className="text-custom-black">www.companyname.com</Link></h3>
                                                    <h5 className="no-margin fw-600"><Link to="#" className="text-custom-blue" onClick={() => this.setState({ open: !open })}
                                                        aria-controls="user-profile"
                                                        aria-expanded={open}>Your Loan Profile</Link></h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="right-side">
                                                    <ul className="custom">
                                                        <li>
                                                            <div className="icon-box">
                                                                <img src={process.env.PUBLIC_URL + "/assets/images/more.png"} alt="icon" />
                                                            </div>
                                                            <p className="text-custom-black">Get more out of <br />Loanly</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon-box">
                                                                <img src={process.env.PUBLIC_URL + "/assets/images/connect.png"} alt="icon" />
                                                            </div>
                                                            <p className="text-custom-black">Connect with the <br />best</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon-box">
                                                                <img src={process.env.PUBLIC_URL + "/assets/images/move.png"} alt="icon" />
                                                            </div>
                                                            <p className="text-custom-black">Plan your next <br />move</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-padding user-dashboard-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Collapse in={this.state.open}>
                                        <div className="user-loan-profile">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="welcome-box mb-md-40">
                                                        <div className="icon-box">
                                                            <img src={process.env.PUBLIC_URL + "/assets/images/faq-user.png"} alt="icon" />
                                                        </div>
                                                        <div className="welcome-text">
                                                            <h4 className="text-custom-black">Welcome Back!</h4>
                                                            <p className="text-custom-black">We're happy to help you grow your business with Loanly Working Capital.</p>
                                                            <Link to="#" className="text-custom-blue fw-600 fs-14">View loan history</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-sm-4">
                                                    <div className="loan-box-wrap">
                                                        <div className="content">
                                                            <h2 className="text-custom-black fw-600">5</h2>
                                                            <p className="no-margin text-custom-black">Loans</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-8">
                                                    <div className="loan-box-wrap justify-content-between">
                                                        <div className="content">
                                                            <h2 className="text-custom-black fw-600">$ 50,000</h2>
                                                            <p className="no-margin text-custom-black">Total Borrowed</p>
                                                        </div>
                                                        <div className="content-infor">
                                                            <ul className="custom">
                                                                <li>Last Payment on <Link to="#" />24th April 20</li>
                                                                <li> <Link to="#">View Monthly Details</Link> </li>
                                                                <li> <Link to="#">View Yearly Details</Link> </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="close-btn" onClick={() => this.setState({ open: !open })}
                                                    aria-controls="user-profile"
                                                    aria-expanded={open}>
                                                    <Link to="#"><i className="fas fa-times" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                                <Loanprogress/>
                                <Loandetails/>
                            </div>
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}

export default Content;