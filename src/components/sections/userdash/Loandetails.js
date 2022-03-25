import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

const dailyactivitypost = [
    {
        month: "Mar",
        date: "04",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "03",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "05",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "06",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "10",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "05",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
];
const daysummarypost = [
    {
        month: "Mar",
        date: "04",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "03",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "05",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "06",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "10",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
    {
        month: "Mar",
        date: "05",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",

    },
];

class Loandetails extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="dashboard-third-sec">
                    <div className="row">
                        <aside className="col-lg-4 mb-md-80">
                            <div className="widget-box mb-xl-30">
                                <h4 className="text-custom-black">Loan Details</h4>
                                <div className="content-wrap">
                                    <div className="text-wraper mb-xl-10">
                                        <label className="fw-600 fs-16 text-custom-black">$ 10,000</label>
                                        <p className="no-margin fw-500">Outstanding balance</p>
                                    </div>
                                    <div className="text-wraper mb-xl-10">
                                        <label className="fw-600 fs-16 text-custom-black">$ 1,257</label>
                                        <p className="no-margin fw-500">Paid to date</p>
                                    </div>
                                    <button type="submit" className="btn-first btn-submit text-custom-blue">Make Payment</button>
                                </div>
                            </div>
                            <div className="widget-box mb-xl-30">
                                <div className="content-wrap">
                                    <div className="text-wraper mb-xl-10">
                                        <label className="fw-600 fs-16 text-custom-black">$ 10,000</label>
                                        <p className="no-margin fw-500">Initial loan amount</p>
                                    </div>
                                    <div className="text-wraper mb-xl-10">
                                        <label className="fw-600 fs-16 text-custom-black">$ 1,257</label>
                                        <p className="no-margin fw-500">Loan Fee</p>
                                    </div>
                                    <div className="text-wraper mb-xl-10">
                                        <label className="fw-600 fs-16 text-custom-black">30%</label>
                                        <p className="no-margin fw-500">Repayment percentage</p>
                                    </div>
                                    <div className="text-wraper mb-xl-10">
                                        <label className="fw-600 fs-16 text-custom-black">$ 4,500</label>
                                        <p className="no-margin fw-500">Minimum due every 90 days</p>
                                    </div>
                                    <div className="text-wraper">
                                        <Link to="#" className="text-custom-blue fw-600 fs-14"><i className="fas fa-download mr-2" /> Download contract</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-box mb-xl-30">
                                <h4 className="text-custom-black">How are we doing?</h4>
                                <div className="content-wrap">
                                    <div className="text-wraper mb-xl-10">
                                        <label className="fw-600 fs-14 text-custom-black mb-xl-10">Your feedback is always appreciated.</label>
                                    </div>
                                    <div className="text-wraper">
                                        <Link to="#" className="text-custom-blue fw-600 fs-14">Take our satisfaction survey</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-box mb-xl-30">
                                <h4 className="text-custom-black">Loan Tips</h4>
                                <div className="content-wrap">
                                    <div className="text-wraper mb-xl-10">
                                        <label className="fw-600 fs-14 text-custom-black mb-xl-10">Meet the minimum requirement</label>
                                        <p className="no-margin fw-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                    <div className="text-wraper">
                                        <Link to="#" className="text-custom-blue fw-600 fs-14">Learn about the minimum requirement</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-box pb-0 border-0">
                                <h4 className="text-custom-black">Have Questions?</h4>
                                <div className="content-wrap">
                                    <div className="text-wraper mb-xl-20">
                                        <label className="fw-600 fs-14 text-custom-black d-block">Call us and we'll be happy to help.</label>
                                        <Link to="#" className="fw-600 fs-14 text-custom-black">(+345 123 456 7890)</Link>
                                    </div>
                                    <div className="text-wraper">
                                        <label className="fw-600 fs-14 text-custom-black d-block">9:00AM to 8:00PM Eastern Time </label>
                                        <Link to="#" className="fw-600 fs-14 text-custom-black">Monday - Friday</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <div className="col-lg-8">
                            <div className="tabs-sec">
                                <Tab.Container defaultActiveKey="dailyactivity">
                                    <Nav variant="tabs" className="custom nav nav-tabs mb-xl-30">
                                        <Nav.Item>
                                            <Nav.Link eventKey="dailyactivity">Daily Activity</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="daysummary">90-Day Summary</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="dailyactivity">
                                            <div className="sch-payment mb-xl-30">
                                                <h4 className="text-custom-black">Scheduled Payments</h4>
                                                <div className="sch-payment-box">
                                                    <Link to="#" className="payment-activity-box border-0">
                                                        <div className="left-side">
                                                            <div className="date-box">
                                                                <p className="month no-margin">Mar <span>05</span></p>
                                                            </div>
                                                            <div className="payment-type-box">
                                                                <p className="text-custom-blue mb-1 fw-600">Auto-repayment</p>
                                                                <p className="no-margin fw-600">Loan balance</p>
                                                            </div>
                                                        </div>
                                                        <div className="right-side">
                                                            <div className="price-box">
                                                                <p className="mb-1 fw-600 text-custom-black">$ 1,257.00</p>
                                                                <p className="no-margin text-light-grey">2 Completed</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="recent-activity">
                                                <h4 className="text-custom-black">Recent Activity</h4>
                                            </div>
                                            {dailyactivitypost.map((item, i) => (
                                                <Link key={i} to="#" className="payment-activity-box">
                                                    <div className="left-side">
                                                        <div className="date-box">
                                                            <p className="month no-margin">{item.month} <span>{item.date}</span></p>
                                                        </div>
                                                        <div className="payment-type-box">
                                                            <p className="text-custom-blue mb-1 fw-600">{item.text1}</p>
                                                            <p className="no-margin fw-600">{item.text2}</p>
                                                        </div>
                                                    </div>
                                                    <div className="right-side">
                                                        <div className="price-box">
                                                            <p className="mb-1 fw-600 text-custom-black">{item.text3}</p>
                                                            <p className="no-margin text-light-grey">{item.text4}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                            <div className="all-act">
                                                <Link to="#" className="text-right fw-600">View all activity</Link>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="daysummary">
                                            <div className="sch-payment mb-xl-30">
                                                <h4 className="text-custom-black">Scheduled Payments</h4>
                                                <div className="sch-payment-box">
                                                    <Link to="#" className="payment-activity-box border-0">
                                                        <div className="left-side">
                                                            <div className="date-box">
                                                                <p className="month no-margin">Mar <span>05</span></p>
                                                            </div>
                                                            <div className="payment-type-box">
                                                                <p className="text-custom-blue mb-1 fw-600">Auto-repayment</p>
                                                                <p className="no-margin fw-600">Loan balance</p>
                                                            </div>
                                                        </div>
                                                        <div className="right-side">
                                                            <div className="price-box">
                                                                <p className="mb-1 fw-600 text-custom-black">$ 1,257.00</p>
                                                                <p className="no-margin text-light-grey">2 Completed</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="recent-activity">
                                                <h4 className="text-custom-black">Recent Activity</h4>
                                            </div>

                                            {daysummarypost.map((item, i) => (
                                                <Link key={i} to="#" className="payment-activity-box">
                                                    <div className="left-side">
                                                        <div className="date-box">
                                                            <p className="month no-margin">{item.month} <span>{item.date}</span></p>
                                                        </div>
                                                        <div className="payment-type-box">
                                                            <p className="text-custom-blue mb-1 fw-600">{item.text1}</p>
                                                            <p className="no-margin fw-600">{item.text2}</p>
                                                        </div>
                                                    </div>
                                                    <div className="right-side">
                                                        <div className="price-box">
                                                            <p className="mb-1 fw-600 text-custom-black">{item.text3}</p>
                                                            <p className="no-margin text-light-grey">{item.text4}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}

                                            <div className="all-act">
                                                <Link to="#" className="text-right fw-600">View all activity</Link>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loandetails;