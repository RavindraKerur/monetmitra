import React, { Component } from 'react';
import { Tab, Nav } from "react-bootstrap";

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
                                        <p className="fs-14 mb-xl-20">Car Refinancing is when you take a new loan to pay off the outstanding balance on your existing car loan. Car Refinancing is generally used by customers for features such as low interest rates, to increase tenures, or to change the terms of the existing loan. In any of the cases, customers generally go for Car Refinancing to save money.</p>
                                        <p className="fs-14 mb-xl-20">It is a good to go for Car Refinancing when you see that there is a drop in interest rates when compared to your existing interest rate. One needs to know that refinancing car loan is not a right choice when you have already made a substantial repayment, or if the car value has depreciated, or the foreclosurecharges are high, and when you have plans to apply for new loans in the future as refinancing may impact your credit score negatively.</p>
                                    </div>
                                    <Tab.Container defaultActiveKey="tab1">
                                        <Nav variant="tabs" className="lw-nav-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab1">Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab2">Loan Details</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab3">Apply</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="lw-tab-content-wrapper">
                                            <Tab.Pane eventKey="tab1" className="container dark-red">
                                                <div className="loan-tab-content">
                                                    <h6 className=" fw-700 text-dark text-uppercase">Features of a Used Car Loan</h6>
                                                    <p className="fs-14 mb-xl-20">Content tobe added</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2" className="container">
                                                <div className="loan-tab-content">
                                                    <table className="lw-tab-table loan-table">
                                                        <tbody>
                                                            <tr className="lw-table-row-1">
                                                                <th colSpan="2">Used Car Loan Details</th>
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
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab3" className="container">
                                                <div className="loan-tab-content">
                                                    Form comes here
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