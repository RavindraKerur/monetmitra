import React, { Component } from 'react';
import { Tab, Nav } from "react-bootstrap";
import Loanform from '../loanForms/Loanform';
import Comparison from './Comparison';
import Faqs from './Faqs';

class Content extends Component {
    render() {
        return (
            <section className="section-padding bg-gray service-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-12">
                                <div className="container dark-red">
                                    <div className="mb-md-40 ">
                                        <p className="fs-14 mb-xl-20">A Personal Loan is a loan for your personal purpose, instead of a commercial or business needs, be it your child’s wedding, a dream vacation, a shopping extravaganza, buying a new furniture and various other needs that an individual can have . A Personal Loan is usually a smaller amount than other loans such as a Home Loan, Mortgage loan or Business Loan. Availing a Personal loan is often stress free and are many offers from the banks most of the time.</p>
                                    </div>
                                    <Tab.Container defaultActiveKey="tab1">
                                        <Nav variant="tabs" className="lw-nav-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab1">Purpose of Loan</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab2">Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab3">Loan Details</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab4">Apply</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab5">Documents</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab6">Comparison</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab7">FAQs</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="lw-tab-content-wrapper">
                                            <Tab.Pane eventKey="tab1" className="container">
                                                <div className="loan-tab-content">
                                                    <p className="fs-14 mb-xl-20">A personal loan allows you to borrow money to pay for personal expenses and then repay those funds over time. The purose of personal loans can be for the following requirements.</p>
                                                    <ul>
                                                        <li className="fs-14"><i className="fas fa-check" /> Moving expenses</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> Debt consolidation</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> Medical bills</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> Wedding expenses</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> Home renovations or repairs</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> Funeral costs</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> Vacation costs</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> Unexpected expenses</li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2" className="container dark-red">
                                                <div className="loan-tab-content">
                                                    <ul>
                                                        <li className="fs-14"><i className="fas fa-check" /> AFFORDABLE INTEREST RATES</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> <strong>ELIGIBILITY:</strong> Eligibility for a Personal Loan is mostly depended on the salary of the customer, outstanding loans, credits and credit history.</li>
                                                        <li className="fs-14"><i className="fas fa-check" /> <strong>MINIMAL CHARGES 1% TO 5%</strong></li>
                                                        <li className="fs-14"><i className="fas fa-check" /> <strong>MINIMUM CHECKS CONSIDERED FOR ELIGIBILITY:</strong> Ongoing EMIs: Should not be more than 40% of your income</li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab3" className="container">
                                                <div className="loan-tab-content">
                                                    <div className="table-responsive">
                                                        <table className="lw-tab-table loan-table">
                                                            <tbody>
                                                                <tr className="lw-table-row-1">
                                                                    <th colSpan="2">Personal Loan Details</th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Loan Amount</strong></td>
                                                                    <td className="lw-table-data-2">Rs. 1 Lakh to Rs. 1 Crore</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Interest Rate</strong></td>
                                                                    <td className="lw-table-data-2">10.50% onward</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Tenure</strong></td>
                                                                    <td className="lw-table-data-2">1 year to 5 years</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Processing Fee</strong></td>
                                                                    <td className="lw-table-data-2">Up to 2% of the loan amount</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Prepayment Charges</strong></td>
                                                                    <td className="lw-table-data-2">Up to 5% of the outstanding principal</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab4" className="container">
                                                <div className="loan-tab-content">
                                                    <h4 className="text-uppercase text-center text-light-blue">Apply for Personal Loan</h4>
                                                    <Loanform />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab5" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className=" fw-700 text-dark text-uppercase">PERSONAL LOAN (SALARIED)</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> AADHAR Card *</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> PAN Card *</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Residence Address Proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> 3 Months Latest Salary Slips</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> 6 Months Salary Credited Bank statement</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Company ID</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Form No 16</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Loan tracker: if any</li>
                                                        </ul>
                                                    </div>

                                                    <p className="fs-12">* indicates Mandatory documents</p>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab6" className="container">
                                                <div className="loan-tab-content">
                                                    <Comparison />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab7" className="container">
                                                <div className="loan-tab-content">
                                                    <Faqs />
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
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