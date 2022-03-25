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
                                        <p className="fs-14 mb-xl-20">A Business Loan is a loan is meant to fund business requirements such as working capital, expanding operations, adding equipment, inventory, sponsoring events, projects, hiring staff, wages, etc. Either to start up a new business or for expansion of an existing business, they need a large amount of working capital. Scaling up always requires a influx of finances.Which is why, Moneymithra will assist you with quick and hassle free disbursal a loan that will help your business grow to the next level. Business Loan is given in company’s name and is based on the company’s income. </p>
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
                                                    <h6 className="fw-700 text-dark text-uppercase">Types of Business Loans:</h6>

                                                    <h6 className="fw-700 text-dark text-uppercase">Unsecured Business Loan</h6>
                                                    <p className="fs-14 mb-xl-20">Loan amount can be upto Rs. 1 crore. No security to be given to the bank. For unsecured business loans, the business should have atleast 3 years of vintage. Annual turnover needs to meet the eligibility requirement set by the bank. </p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Secured Business Loan</h6>
                                                    <p className="fs-14 mb-xl-20">An asset is to be provided to the funding partner providing you the loan. Loan amount will be determined based on the value of the asset. Upto 80% of the asset value is given as the loan amount.</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Working Capital Loan</h6>
                                                    <p className="fs-14 mb-xl-20">The purpose of this loan is to fund day-to-day operations of a company and is generally used to pay of regular business expenses such as sales/marketing campaigns, wages, manufacturing, adding resources, etc</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Equipment Loan</h6>
                                                    <p className="fs-14 mb-xl-20">Equipment Loan is taken for purchase of equipment and the equipment itself acts as a collateral and hence making this a secured loan. Loan amount is determined based on the value of the equipment and can be upto 90% to 100%.</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Line of Credit</h6>
                                                    <p className="fs-14 mb-xl-20">It is a revolving line of credit. Here, as a borrower you can take an agreed amount as credit.You can draw the amount whenever necessary. There is no necessity to withdraw the amount in lump-sum.Also, you have to pay an interest on the amount used only, instead of the total approved amount.</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Business Loan for Women</h6>
                                                    <p className="fs-14 mb-xl-20">Business Loan for women is provided to women entrepreneurs and is specifically meant for women only. To be eligible for this business loan, the female must be an owner of at least 50 percent of the company.</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Mudra Yojana Business Loan</h6>
                                                    <p className="fs-14 mb-xl-20">The Mudra Yojana business loan was launched by the government of India for small and medium sized enterprises.These loans carry special interest rates and are provided by almost every bank offering business loans.</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Business Loan Eligibility Criteria</h6>
                                                    <p className="fs-14 mb-xl-20">Any self-employed individual, professional, service providers, manufacturers, private limited or limited company, etc. can apply for a Business Loan.</p>

                                                    <p className="fs-14 mb-xl-20">Common eligibility criteria are as follows,
                                                    however, can vary from bank to bank:</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Age:</strong> Applicant must be atleast 21 years of age. Most banks will disburse business loans to individuals aged between 24 to 65 years.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Business Experience:</strong> The current vintage of the business should be a minimum of 3 years. </p>

                                                    <p className="fs-14 mb-xl-20"><strong>Annual Turnover:</strong> There needs to be a minimum annual turnover of Rs. 50 Lakhs.</p>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className="fw-700 text-dark text-uppercase">Documents required for a Business Loan</h6>
                                                    <p className="fs-14 mb-xl-20">If you want to apply for an unsecured business loan, then you have to provide KYC (PAN Card, Aadhaar Card) - of Business /Directors/Partners/Proprietor. Apart from these, you have to submit the following documents.</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Photograph – A recent passport sized photograph</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Proof of Identity - PAN card, Valid passport, Driving License, Aadhaar card, Voter's ID card</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Proof of Address - Business address proof, Utility bill, Latest (not older than 3 months) water bill/electricity bill/telephone bill/gas connection, Voter's ID card, Passport, Aadhaar Card, Driving license</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Proof of Business Vintage and Ownership - Proof of business existence for last 3 years, Shop Act/Gumasta License (if applicable), and registration proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> GST - GST Certificate and GST Returns of last 4 quarters</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Income Tax Return - ITR for 3 years with computation</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Financial Documents - Current/saving account bank statement for all current/saving accounts in PDF Format (latest 12 months), Audited Financials for 2 years - Balance Sheet and P&L, Existing Loan Account statements/sanction letters.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className="fw-700 text-dark text-uppercase">Documents required</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> KYC Documents</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Duly filled in application form signed by the customer</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Relevant financial documents</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Bank account statement of last 6 months</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> PAN card/Form 60</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Business Proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> ITR</li>
                                                        </ul>
                                                    </div>

                                                    {/* <h6 className="fw-700 text-dark text-uppercase">Business Loan Interest Rates are determined by the following:</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Age and Profile of the customer</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Credit Score (CIBIL)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Repayment Capability</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Financial Position of the company</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Loan Scheme</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className="fw-700 text-dark text-uppercase">Business Loan Tenure</h6>
                                                    <p className="fs-14 mb-xl-20">Business loans tenure ranges from a minimum of 1 year to a maximum of 4 years.</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Business Loan Pre-Payment</h6>
                                                    <p className="fs-14 mb-xl-20">Business Loans can bepre-paid after one has re-payedatleast 6 EMI’s. Foreclosure charges are applicable as per the banks term and condition.The part pre-payment can be made only once in a financial year.</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Why Choose Moneymithra to Help You Find a Business Loan</h6>
                                                    <p className="fs-14 mb-xl-20">As a one-stop destination for your business funding needs, Moneymithra provides you a variety of business loan offers from top banks and NBFCs in India. Our Business Loans are customized to fund the expansion of your business. We will help you grow your venture.</p> */}

                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tab3" className="container">
                                                <div className="loan-tab-content">
                                                    <div className="table-responsive">
                                                        <table className="lw-tab-table loan-table">
                                                            <tbody>
                                                                <tr className="lw-table-row-1">
                                                                    <th colSpan="2">Business Loan Details</th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Loan Amount</strong></td>
                                                                    <td className="lw-table-data-2">Rs. 1 lakh to Rs. 1 crore</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Interest Rate</strong></td>
                                                                    <td className="lw-table-data-2">11% onward</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Tenure</strong></td>
                                                                    <td className="lw-table-data-2">6 months to 5 years</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Processing Fee</strong></td>
                                                                    <td className="lw-table-data-2">Up to 3% of loan amount</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Foreclosure Fee</strong></td>
                                                                    <td className="lw-table-data-2">Up to 7% of the outstanding amount + GST</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Collateral</strong></td>
                                                                    <td className="lw-table-data-2">Not required</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab4" className="container">
                                                <div className="loan-tab-content">
                                                    <h4 className="text-uppercase text-center text-light-blue">Apply for Business Loan</h4>
                                                    <Loanform />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab5" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className=" fw-700 text-dark text-uppercase">BUSINESS LOAN</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> AADHAR Card *</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> PAN Card *</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Residence Address Proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> KEB Bill</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Office Address Proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Latest 3 years ITR (With CA attested)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Latest 6 months Bank statement</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> VAT</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> GST Registration Copy</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Latest photo 2</li>
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