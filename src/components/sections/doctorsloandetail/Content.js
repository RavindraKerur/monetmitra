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
                                        <p className="fs-14 mb-xl-20">Doctors Loan is specially designed for a medical practitioner’s unique professional and personal needs.</p>
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
                                                    <h6 className="fw-700 text-dark text-uppercase">Types of Loans for doctors:</h6>

                                                    <h6 className="fw-700 text-dark text-uppercase">Personal Loan for doctors</h6>
                                                    <p className="fs-14 mb-xl-20">Manage expenses like wedding or vacation, home renovation or overseas education costs or your debt with a Personal Loan for doctors.</p>

                                                    <h6 className="fw-700 text-dark text-uppercase">Eligibility criteria for Personal Loan for doctors:</h6>

                                                    <div className="table-responsive">
                                                        <table className="lw-tab-table loan-table">
                                                            <tbody>
                                                                <tr className="lw-table-row-1">
                                                                    <th colSpan="2">Eligibility criteria</th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Degree Type</strong></td>
                                                                    <td className="lw-table-data-2">Minimum Eligibility</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Super Specialist, Post Graduate, Specialist Diploma other PG Diploma</strong></td>
                                                                    <td className="lw-table-data-2">MBBS degree to be registered with medical council</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>MBBS</strong></td>
                                                                    <td className="lw-table-data-2">Post registration with Medical Council</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>BAMS/BHMS</strong></td>
                                                                    <td className="lw-table-data-2">2 years from the date of medical registration</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>MDS/Dentist</strong></td>
                                                                    <td className="lw-table-data-2">5 years from the date of medical registration</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <br />
                                                    <h6 className="fw-700 mt-30 text-dark text-uppercase">Loan against property for doctors</h6>
                                                    <p className="fs-14 mb-xl-20">Choose a loan against property for doctors and get funds up to Rs.2 crore and meet your bigger expenses, like moving to a new clinic premise, upgrading medical equipment, or even your child’s overseas education and more.</p>

                                                    <h6 className="fw-700 mt-30 text-dark">Features of Loan against Property for Doctors:</h6>
                                                    <p className="fs-14 mb-xl-20"><strong>High- Loan sanction:</strong> Loan against property upto Rs. 2 Crore</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Flexi loan facility:</strong> Only required amount of funds can be withdrawn from a sanctioned loan limit and prepay when desired. An option to also only pay interest component as monthly EMI and lower instalment by 45%.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Balance Transfer:</strong> Easy balance transfer of existing loan against property at attractive interest rates and high value top up.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Flexible repayment tenures:</strong> Tenure ranging upto 144 months.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Pre-approved offers:</strong> Customized pre-approved offers to expedite the process.</p>

                                                    <h6 className="fw-700 mt-30 text-dark text-uppercase">Business loan for doctors</h6>
                                                    <p className="fs-14 mb-xl-20">Get the latest medical equipment, expand your clinic, integrate technology into your practice, or maintain your cash flow with a business loan for doctors of up to Rs.42 lakh.</p>

                                                    <h6 className="fw-700 mt-30 text-dark text-uppercase">Flexi loans</h6>
                                                    <p className="fs-14 mb-xl-20">Withdraw the complete amount or in parts as per your convenience. Pay only interest as EMI and foreclose/part-prepay anytime during the tenor.</p>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className="fw-700 text-dark text-uppercase">Documents required for Business Loan for Doctors:</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> KYC Documents</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Medical registration certificate</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className="fw-700 text-dark text-uppercase">Features of Personal Loans for Doctors:</h6>
                                                    <p className="fs-14 mb-xl-20"><strong>Higher Quantum amount and a longer Tenure:</strong> With Personal Loans for Doctors, Doctors can avail a higher amount and for a longer terms duration when compared to other personal loans</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Flexi Loan facility:</strong> Only required amount of funds can be withdrawn from a sanctioned loan limit and prepay when desired. An option to also only pay interest component as monthly EMI and lower instalment by 45%.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Minimal documentation:</strong> Limited documentation to avoid the lengthy paperwork and save time.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>No Collateral:</strong> MSME loans for doctors can be availed without any security or guarantor.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Part Pre-payment facility:</strong> Option of part pre-payment of loan without any extra charges. Prepaid amount should be equal value of 3 EMIs, with no limit on the maximum amount.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Pre-approved offers:</strong> Customized pre-approved offers to expedite the process.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Business Loans for doctors:</strong> Get the latest medical equipment, renovate or expand your clinic, integrate technology into your practice, maintain your cash flow with a Business Loan for doctors.</p>

                                                    <div className="table-responsive">
                                                        <table className="lw-tab-table loan-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Degree Type</strong></td>
                                                                    <td className="lw-table-data-2">Minimum Eligibility</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Super Specialist, Post Graduate, Specialist Diploma other PG Diploma</strong></td>
                                                                    <td className="lw-table-data-2">MBBS degree to be registered with medical council</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>MBBS</strong></td>
                                                                    <td className="lw-table-data-2">Post registration with Medical Council</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>BAMS/BHMS</strong></td>
                                                                    <td className="lw-table-data-2">2 years from the date of medical registration</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>MDS/Dentist</strong></td>
                                                                    <td className="lw-table-data-2">5 years from the date of medical registration</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <h6 className="fw-700 mt-30 text-dark text-uppercase">Documents required for Business Loan for Doctors:</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> KYC Documents</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Medical registration certificate</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className="fw-700 text-dark text-uppercase">Features of Personal Loans for Doctors:</h6>
                                                    <p className="fs-14 mb-xl-20"><strong>•	Higher Quantum amount and a longer Tenure:</strong> With Personal Loans for Doctors, Doctors can avail a higher amount and for a longer terms duration when compared to other personal loans</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Flexi Loan facility:</strong> Only required amount of funds can be withdrawn from a sanctioned loan limit and prepay when desired. An option to also only pay interest component as monthly EMI and lower instalment by 45%.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Minimal documentation:</strong> Limited documentation to avoid the lengthy paperwork and save time.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>No Collateral:</strong> MSME loans for doctors can be availed without any security or guarantor.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Part Pre-payment facility:</strong> Option of part pre-payment of loan without any extra charges. Prepaid amount should be equal value of 3 EMIs, with no limit on the maximum amount.</p>

                                                    <p className="fs-14 mb-xl-20"><strong>Loan against Property for doctors:</strong> Take a Mortgage Loan for doctors and fund high ticket costs like moving to a new clinic premise, upgrading medical equipment or even your child’s overseas education and more.</p>

                                                    <div className="table-responsive">
                                                        <table className="lw-tab-table loan-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Degree Type</strong></td>
                                                                    <td className="lw-table-data-2">Minimum Eligibility</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Super Specialty Doctors (MD/DM/MS)</strong></td>
                                                                    <td className="lw-table-data-2">Minimum 2 years of post-qualification experience</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Graduate Doctors (MBBS)</strong></td>
                                                                    <td className="lw-table-data-2">Minimum 2 years of post-qualification experience</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Dentists (BDS/MDS)</strong></td>
                                                                    <td className="lw-table-data-2">Minimum 2 years of post-qualification experience</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Ayurvedic & Homeopathic (BAMS/BHMS)</strong></td>
                                                                    <td className="lw-table-data-2">Minimum 2 years of post-qualification experience</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <h6 className="fw-700 mt-30 text-dark text-uppercase">Documents required for Loan against property for Doctors:</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> KYC of authorized Signatories</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Medical Registration Certificates</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> ITR, Balance Sheets, and Profit/Loss statements for past 2 years</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Copy of ownership papers of the property to be pledged.</li>
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
                                                                    <th colSpan="2">Doctors Loan Details</th>
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
                                                                    <td className="lw-table-data-2">12 months to 72 months</td>
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
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>ROI</strong></td>
                                                                    <td className="lw-table-data-2">Starts from 10.25%</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab4" className="container">
                                                <div className="loan-tab-content">
                                                    <h4 className="text-uppercase text-center text-light-blue">Apply for Doctors Loan</h4>
                                                    <Loanform />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab5" className="container">
                                                <div className="loan-tab-content">
                                                    <h6 className=" fw-700 text-dark text-uppercase">DOCTORS LOAN</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> AADHAR Card *</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> PAN Card *</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Residence Address Proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> KEB Bill</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Clinic / Hospital Address Proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Latest 3 years ITR (With CA attested)</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> "Latest 6 months Bank statement</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Qualification proof</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Doctor certificate</li>
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