import React, { Component } from 'react';
import Loanform from '../loanForms/Loanform';
import Comparison from './Comparison';
import Faqs from './Faqs';
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
                                        <p className="fs-14 mb-xl-20">Whether it's a brand new car, or a pre-loved one, our Car Loans help you focus on buying the best vehicle for you, without having to worry about the cash flow. Fund your car purchase in a smart, quick and hassle-free way with our Car Loans. Various banks provide Car Loans upto a certain percentage of the price of the car or even on zero down payment, based on their offers.</p>
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
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab4">Documents</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab5">Comparison</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab6">FAQs</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="lw-tab-content-wrapper">
                                            <Tab.Pane eventKey="tab1" className="container dark-red">
                                                <div className="loan-tab-content">
                                                    <h6 className=" fw-700 text-dark text-uppercase">Features of a Car Loan</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Car Loans for applicable for both Brand New Car and Used Cards</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Interest rates can be fixed or variable</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Can be availed for both purchase of car for personal as well as business purpose</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Flexible repayment time period</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Car Loan interest rates are usually lower</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Easier process to avail a Car Loan</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> It is a secured loan and hence eligibility probability is much higher</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> The vehicle itself is a collateral against the loan, and needs is hypothecated with the bank until repayment of the final instalment.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Benefits of Car Loan</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Most Car Loans finance the on-road price of the car. Some banks even fund 100% of the on-road price, which means you do not need to even personally fund for the down payment.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> The car serves as the collateral for the loan making it a secured loan.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> At times slightly unfavorable credit score can also get you a car loan, considering the simple process involved in the Car Loan process. However, this varies from bank to bank.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Car Loans interest rates are fixed.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Interest rates are based on credit score and so a high score can get you a cheaper interest rate.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Car Loan Pre-Closure</h6>
                                                    <p className="fs-14 mb-xl-20">If you choose to pay off the outstanding loan amount before the loan term ends, you can do that too. All banks offer you the foreclosure or prepayment facility. Some of the banks takes a penalty fee for that and some may allow you to do so without charging any penalty fee. Prepayment of loan will release your car from hypothecation and gets you the full ownership.</p>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Top-Up of your Car Loan</h6>
                                                    <p className="fs-14 mb-xl-20">If after availing a car loan, you need additional funds for any purpose, you can avail a top-up loan on your existing car loan. Up to 150% of the car’s value can be availed as a top-up loan. For you to avail a top-up on your car loans will need to have maintained a clear payment record for at least 9 months. The process to avail a top-up loan on your existing car loan is quick and requires minimal paperwork.</p>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Car Refinancing</h6>
                                                    <p className="fs-14 mb-xl-20">Car Refinancing is when you take a new loan to pay off the outstanding balance on your existing car loan. Car Refinancing is generally used by customers for features such as low interest rates, to increase tenures, or to change the terms of the existing loan. In any of the cases, customers generally go for Car Refinancing to save money.</p>
                                                    <p className="fs-14 mb-xl-20">It is a good to go for Car Refinancing when you see that there is a drop in interest rates when compared to your existing interest rate. One needs to know that refinancing car loan is not a right choice when you have already made a substantial repayment, or if the car value has depreciated, or the foreclosurecharges are high, and when you have plans to apply for new loans in the future as refinancing may impact your credit score negatively.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2" className="container">
                                                <div className="loan-tab-content">
                                                    <div className="table-responsive">
                                                        <table className="lw-tab-table loan-table">
                                                            <tbody>
                                                                <tr className="lw-table-row-1">
                                                                    <th colSpan="2">Car Loan Details</th>
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
                                            <Tab.Pane eventKey="tab3" className="container">
                                                <div className="loan-tab-content">
                                                    <h4 className="text-uppercase text-center text-light-blue">Apply for Car Loan</h4>
                                                    <Loanform />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab4" className="container">
                                                <div className="loan-tab-content">
                                                    Documents content comes here
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab5" className="container">
                                                <div className="loan-tab-content">
                                                    <Comparison />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab6" className="container">
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