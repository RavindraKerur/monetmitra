import React, { Component } from 'react';
import Form from './Form';
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
                                        <p className="fs-14 mb-xl-20">When you need money immediately and are running short of it or do not have hard cash with you, a credit card comes for your rescue. Credit card is a plastic card issued by a bank, using which you can borrow money for your needs especially purchases.Basically, a credit card is financial product that is handy to meet one’s urgent expenses and do not need to worry about having hard cash at hand.  There is a billing cycle that is fixed and at the end of which, the amount used during the billing cycle is considered as principal amount to be repaid and that needs to be paid along with the interest amount. All banks provide credit cards based on a certain eligibility criterion.</p>
                                    </div>
                                    <Tab.Container defaultActiveKey="tab1">
                                        <Nav variant="tabs" className="lw-nav-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab1">Benefits</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab2">Documents Required</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab3">Features</Nav.Link>
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
                                            <Tab.Pane eventKey="tab1" className="container dark-red">
                                                <div className="loan-tab-content">
                                                    <h6 className="fw-700 text-dark text-uppercase">Benefits of Credit Cards:</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Used for urgent and short-term financial needs when you do not have immediate funds available.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Immediate credit as and when you use the card and does not require you to visit the bank or submit documents or go through an entire procedure of taking a loan.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Many additional benefits are associated with a credit card such as discounts, cashbacks, reward points, air miles, and other benefits on spends.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className="fw-700 text-dark text-uppercase">Credit Card Eligibility Criteria:</h6>
                                                    <p className="fs-14 mb-xl-20">The eligibility for a credit card depends on the card issuing bank and the type of card you are applying for. Below-mentioned are eligibility criteria for credit card.</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Nationality:</strong> You must be an Indian resident.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Employment Status:</strong> You need to be salaries or self-employed with a steady source of income. </li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Income:</strong> Depending on the card you choose and your monthly income, a type of credit card will be approved, and assign a credit limit.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Age:</strong> Minimum age to avail a credit card is 21 years.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Credit Score:</strong> You can get a credit card without having any previous credit history. However, a good CIBIL score improves your eligibility to it.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className="fw-700 text-dark text-uppercase">Documents Required for a Credit Card Application:</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Identity Proof:</strong> PAN card, voter ID card, Aadhaar card, passport, etc. (any one)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Address Proof:</strong> Ration card, electricity bill, passport, telephone bill, driver's licence, voter ID, or last two months’ bank statement, etc.(any one)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Age Proof:</strong> Birth certificate, voter ID card, passport, school passing certificate.(any one)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Income Proof:</strong> Latest income tax proof, bank statement of salary account, latest payslip, Form 16, etc. In case of a professional or businessperson, certified financial document, computation of income, and tax return on the business.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tab3" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className="fw-700 text-dark text-uppercase">Features of Credit Cards:</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Credit Card Loans:</strong> Credit Cards can get you pre-approved loans. However, the interest rates will be much higher credit card loans. Credit card loans are handy when you need urgent cash, and cannot opt for traditional loans such as personal loans or small cash loans etc.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Lifetime Free Card:</strong> Credit cards with no annual membership are available with some banks that offer lifetime free credit cards.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Age Proof:</strong> Birth certificate, voter ID card, passport, school passing certificate.(any one)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Balance Transfer:</strong> There are options to transfer the outstanding balance in your current credit card to another Credit Card providing and thereby you end up repaying the amount at a lower interest rate or in order to avail better benefits.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Global Acceptance:</strong> Credit cards are accepted by most of the merchants all over the world and hence you can use your credit card internationally as well.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Utility Bill Payment:</strong> You can instantly make your bill payments through your credit card. </li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Joining and Annual Fees:</strong> When you apply for a credit card, you have to pay a specific amount for enrolment. This amount is the joining fee. This fee is called the annual fees. Some banks do not charge any joining fees.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>E-statement:</strong> There is an e-statement made available for you at the end of each billing cycle to get all the information of the expenses made using your credit cards. </li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Insurance Coverage:</strong> Credit cards can sometimes come with insurance protection, for instance, life insurance, travel insurance, etc.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Alerts:</strong> You will receive an SMS and email alert when you make any transaction on your credit card. These alerts will also remind you about the pending payments.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Cash Withdrawal Facility:</strong> You can even withdraw money from an ATM using your credit cards by paying a small fee for this service. This option is available on some of the credit cards only.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className="fw-700 text-dark text-uppercase">Why Choose Moneymithra to Find a Suitable Credit Card?</h6>
                                                    <p className="fs-14 mb-xl-20">Moneymithra gives a detailed insight into the credit cards from top banks and financial institutions, so that you can compare these, and select the ideal one.</p>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab4" className="container">
                                                <div className="loan-tab-content">
                                                    <Form />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab5" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className=" fw-700 text-dark text-uppercase">Credit Cards</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> AADHAR Card *</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> PAN Card *</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Residence Address Proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> 3 Months Latest Salary Slips</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> 3 Months Salary Credited Bank statement</li>
                                                        </ul>
                                                    </div>
                                                    <p className="fs-12">* indicates Mandatory documents</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab6" className="container">
                                                <div className="loan-tab-content">
                                                    Loan Comparison content comes here
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