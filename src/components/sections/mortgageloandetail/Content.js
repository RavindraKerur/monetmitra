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
                                        <p className="fs-14 mb-xl-20">Mortgage Loan, also known as Loan against property is a secured loan. This comes off as a better option during times of financial crisis. The property papers are kept as collateral with the financial institution providing loan. The property papers are returned to the borrower, once the loan is successfully repaid. You can apply for a loan against a residential, commercial, and an industrial property.</p>
                                        <p className="fs-14 mb-xl-20">Mortgage Loans is one of the most sought-after loans due to the increasing real estate value. Refinancing and take over of existing loan is also an option that most banks provide.</p>
                                        <p className="fs-14 mb-xl-20">Someone who owns a house or property can avail LAP to meet his/her financial needs. The property that is being pledged for loan should be free of any encumbrance that is it should be given and as security for any purpose or other loan. LAP is provided for both salaries and self-employed individuals. The interest rates and loan amount is determined by the property and your annual income.</p>
                                        <p className="fs-14 mb-xl-20">One can get a LAP of up to 80% of the registered value of the property depending on the Bank’s policy and the property type and valuation.  The value of the property would be determined through a valuation conducted by the Bank.</p>
                                        <p className="fs-14 mb-xl-20">Purposes for which a LAP can be availed:</p>
                                        <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                            <ul>
                                                <li className="fs-14"><i className="fas fa-check" /> For funding one’s business and working capital needs of individuals, partnerships, private companies and SME’s</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Purchase of new property</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Personal use such as marriages, education, vacation, home renovations, medical emergency</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Tab.Container defaultActiveKey="tab1">
                                        <Nav variant="tabs" className="lw-nav-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab1">Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab2">Documents Required</Nav.Link>
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
                                            <Tab.Pane eventKey="tab1" className="container dark-red">
                                                <div className="loan-tab-content">
                                                    <h6 className=" fw-700 text-dark text-uppercase">Features of a Loan Against Property (LAP):</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> You can get up to 75% of the property’s current market value, as the loan amount. </li>
                                                            <li className="fs-14"><i className="fas fa-check" /> A loan against property implies a fixed or a floating interest rate.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Rate of Interest of loans are based on the customer’s profile – salary, credit history, etc</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Both salaried and self-employed individuals can avail this loan.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> The loan tenure is between 10 year and 15 years and hence are long-tenure loans.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Processing fee ranges from 0.50% up to 2% of the total loan amount.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Top-up loan and overdraft facility could also be available.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Benefits of availing Loan Against Property (LAP)</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Lower rate of interest compared to other loans, as the loan against property is secured against property.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Loan tenure can be upto 18 years resulting in lower EMI compared to unsecured loans where loan tenure is only upto 5 years.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Additional collateral or guarantee is not required.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Loan can be taken in the name of company or firm even if the property is owned in individual names of partners or directors.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Eligibility Criteria for a Property Loan</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> You must be atleast 21 years of age to avail a mortgage loan.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> You must be one of the owners of the chosen property.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> You can be either salaried or a self-employed person with a good repayment history.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> If salaried, you should have a work-experience of at least 2 years.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Monthly salary should be at least Rs. 15,000 and above.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Your on-going EMIs will affect the Eligibility amount.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Role of Moneymithra in assisting you with a Loan Against Property?</h6>
                                                    <p>Moneymithra, will provide you with unbiased comparison of loan against property schemes over different NBFCs and banks. </p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> You can get instant loan quotes from financial institutions about property loan. We give you the opportunity to compare and apply for the loan online. It takes less than 2 minutes to apply online.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> You can understand the loan against property requirement such as documents, eligibility, fees, charges, interest rate on one-page itself.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> You do not have to visit any bank or NBFC to apply for and avail the loan.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> If you meet the eligibility criteria, you will receive e-approval of loan in no time.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> The funds will be disbursed to your bank account after loan approval.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> You will get customized quotes based on your needs.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> You will experience a top-notch customer service.</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className=" fw-700 text-dark text-uppercase">Documents Required to Apply for a Loan against Property:</h6>
                                                    <p className="fs-14 mb-xl-20">Generic Property Related Documents for all:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Registered sale deed/past sale deed chains (each sale deed of the past sales of the said property from its first allotment)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Copy of property agreement</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Conveyance deed</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Lease deed (if the property is leased)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Latest house tax return proofs</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Approved building plan from the Municipal Corporation</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Share certificate (if the society is formed)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Latest maintenance bills</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Latest electricity bills</li>
                                                        </ul>
                                                    </div>

                                                    <p className="fs-14 mb-xl-20">Other documents required based on financial profile:</p>
                                                    <p className="fs-14 mb-xl-20">For Salaried Individuals:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Form-16 provided by the current employer</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Past 3 months salary slips</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Identity proof such as Passport, Voter ID Card, Aadhar Card</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Recent passport-sized photographs</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Proof of residence</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Salary slips for past 3 months</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Salary account’ bank statement for the last 6 months</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> A cheque for processing cost/administrative cost applicable by the bank/NBFC.</li>
                                                        </ul>
                                                    </div>

                                                    <p className="fs-14 mb-xl-20">For Self-employed Businesspersons:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Identity and residence proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Recent passport-sized photographs</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Educational qualification diplomas, certificates, degrees, and academic credentials</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Bank statements of last 6 months</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Past 3 years Income Tax Returns</li>
                                                        </ul>
                                                    </div>

                                                    <p className="fs-14 mb-xl-20">For Self-employed Professionals:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Identity proof and address proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Recent passport-sized photographs</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Certificates proving your qualification credentials related to academics</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Balance sheet and profit and loss statement of the company of the last 3 years</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Existence proof of business and its profile details</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Bank statement of last 6 months</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Company’s acknowledged Income Tax Returns and statements of past 3 years</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Licensing and registration certificate of the profession</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab3" className="container">
                                                <div className="loan-tab-content">
                                                    <div className="table-responsive">
                                                        <table className="lw-tab-table loan-table">
                                                            <tbody>
                                                                <tr className="lw-table-row-1">
                                                                    <th colSpan="2">Mortgage Loan Details</th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Interest Rate</strong></td>
                                                                    <td className="lw-table-data-2">9.00%  onwards</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Processing Fee</strong></td>
                                                                    <td className="lw-table-data-2">Up to 2% of the loan amount</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Loan Tenure</strong></td>
                                                                    <td className="lw-table-data-2">Up to 15 years</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Prepayment Charges</strong></td>
                                                                    <td className="lw-table-data-2">No charges</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab4" className="container">
                                                <div className="loan-tab-content">
                                                    <h4 className="text-uppercase text-center text-light-blue">Apply for Mortgage Loan</h4>
                                                    <Loanform />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab5" className="container">
                                                <div className="loan-tab-content">
                                                    Documents content comes here
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