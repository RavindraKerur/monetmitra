import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

// Homeloan
const personalloan = [
    {
        icon: "fas fa-percent",
        title: "Interest Rates as low as 10.25%"
    },
    {
        icon: "fas fa-hand-holding-usd",
        title: "Processing Fee at just Rs. 1999/-"
    },
    {
        icon: "fas fa-user-lock",
        title: "Collateral free loans"
    },
];

// Businessloan
const businessloan = [
    {
        icon: "fas fa-percent",
        title: "Interest Rates at 13%"
    },
    {
        icon: "fas fa-hand-holding-usd",
        title: "Processing Fee at 1%"
    },
    {
        icon: "fas fa-user-lock",
        title: "Tenure ranging from 1 yr to 4 yrs"
    },
];

// Homeloan
const homeloan = [
    {
        icon: "fas fa-percent",
        title: "Interest Rates at the lowest 6.65%"
    },
    {
        icon: "fas fa-hand-holding-usd",
        title: "Processing Fee of just Rs. 4999/-"
    },
    {
        icon: "fas fa-user-lock",
        title: "Fixed Tenure and Easy EMIs"
    },
];

// DoctorLoan
const doctorLoan = [
    {
        icon: "fas fa-percent",
        title: "Interest Rates – 10.25%"
    },
    {
        icon: "fas fa-hand-holding-usd",
        title: "Processing Fee – Rs. 1999/-"
    },
    {
        icon: "fas fa-user-lock",
        title: "Higher quantum amount and longer tenure"
    },
];

// CarLoan
const carloan = [
    {
        icon: "fas fa-percent",
        title: "Interest Rates of 7.35%"
    },
    {
        icon: "fas fa-hand-holding-usd",
        title: "Processing Fee of0.25%"
    },
    {
        icon: "fas fa-user-lock",
        title: "Loan applicable for both New Car and Used Car"
    },
];

class Typeofloan extends Component {
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 no-padding">
                            <div className="ln-type-payment-tabs">
                                <Tab.Container defaultActiveKey="tab1">
                                    <Nav variant="tabs" className="custom nav nav-tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab1">Personal Loan</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab2">Business Loan</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab3">Home Loan</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab4">Doctor Loan</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab5">Car Loan</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="section-padding ln-type-payment">
                                        <Tab.Pane className="container" eventKey="tab1">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Personal Loan</h3>
                                                            <p className="text-custom-white no-margin">A Personal Loan is a loan for your personal purpose, be it your child’s wedding, a dream vacation, a shopping extravaganza, buying a new furniture and various other needs that an individual can have.</p>
                                                        </div>
                                                        <div className="row">
                                                            {personalloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <i className={item.icon}></i>
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white lineheight fw-600">{item.title}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/finance" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="tab2">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Business Loan</h3>
                                                            <p className="text-custom-white no-margin">We help you achieve your dream! Plan your startups with Moneymithra’s Business Loans!</p>
                                                        </div>
                                                        <div className="row">
                                                            {businessloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <i className={item.icon}></i>
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white lineheight fw-600">{item.title}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/finance" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="tab3">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Home Loan</h3>
                                                            <p className="text-custom-white no-margin">Move to your dream home! Apply for Moneymithra’s Home Loans</p>
                                                        </div>
                                                        <div className="row">
                                                            {homeloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <i className={item.icon}></i>
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white lineheight fw-600">{item.title}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/finance" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="tab4">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Doctor Loan</h3>
                                                            <p className="text-custom-white no-margin">Doctor Loans at a very affordable interest rate with Moneymithra</p>
                                                        </div>
                                                        <div className="row">
                                                            {doctorLoan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <i className={item.icon}></i>
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white lineheight fw-600">{item.title}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/finance" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="tab5">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Car Loan</h3>
                                                            <p className="text-custom-white no-margin">Drive your dream car by funding it with Moneymithra’s Car Loan</p>
                                                        </div>
                                                        <div className="row">
                                                            {carloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <i className={item.icon}></i>
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white lineheight fw-600">{item.title}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/finance" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Typeofloan;