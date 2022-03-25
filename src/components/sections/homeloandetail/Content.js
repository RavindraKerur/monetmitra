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
                                        <p className="fs-14 mb-xl-20">Individuals who are interested in buying or constructing houses can avail Home Loans. Home Loans can be availed for purchase, construction or improvement of homes. Home Loan can also be availed to buy a plot or land and construct on it. Home Loans are provided to extend, repair, renovate, alter a new or resold property.</p>
                                        <p className="fs-14 mb-xl-20">Home Loan is a secured loan product where the Housing Loan providing banks provides loans for the purchase or construction of a residential/commercial property. Home Loan is taken by a borrower against the property to be bought. The loan borrower gives the bank conditional ownership over the property. If in case the borrower fails to pay back the loan, the bank can retrieve the lent amount by selling the property.</p>
                                        <p className="fs-14 mb-xl-20">Banks generally evaluate the property independently and provide loans based on the estimated value. However, in most cases the evaluation is much lower than the actual cost. Banks provide up to maximum of 80% of the value of the house. Repayment of the Home loans are done using Equated Monthly Installments (EMIs) spread over a fixed tenure.</p>
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
                                                    <h6 className=" fw-700 text-dark text-uppercase">Security Collateral</h6>
                                                    <p className="fs-14 mb-xl-20">The home/property being bought or for which loan is being availed is pledged with the bank as a security collateral. In case of non-payment the bank would be entitled to retrieve the property.</p>


                                                    <h6 className=" fw-700 text-dark text-uppercase">Fixed Tenure</h6>
                                                    <p className="fs-14 mb-xl-20">The repayment tenure is fixed on the loan amount taken as loan and is inclusive of the principal and the interest costs.</p>


                                                    <h6 className=" fw-700 text-dark text-uppercase">Easy EMIs</h6>
                                                    <p className="fs-14 mb-xl-20">The principal amount and the interest together constitute the EMI of the loan.</p>


                                                    <h6 className=" fw-700 text-dark text-uppercase">Loan Charges</h6>
                                                    <p className="fs-14 mb-xl-20">The Loan charges include fee for processing, registration charge, charges for documentation and consultation.</p>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Types of Home Loans include:</h6>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Home Purchase Loans</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Land Purchase Loans</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Home Construction Loans</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Home Improvement Loans</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Home Conversion Loans</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Home Extension Loans</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Home Loan Eligibility</h6>
                                                    <p className="fs-14 mb-xl-20">Eligibility of a Home Loan depends on various factors such as:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Age:</strong> Home Loan tenurity and eligibility is determined by your age along with other criteria.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Income:</strong> Your income is another and a major determining factor for your eligibility of a Home Loan. EMI ratio is generally 45% to 50% of your monthly take home income.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Tenure:</strong> The longer your tenure is, the more is your home loan eligibility and the lesser is your EMI.</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Credit Score:</strong> Your CIBIL score provides information about your repayment capacity and hence your eligibility. </li>
                                                            <li className="fs-14"><i className="fas fa-check" /> <strong>Home Loan Interest Rates:</strong> There are generally two types of Interest rates offered for Home Loans. Fixed and Floating rate of interest.</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Home Loan Interest Rates</h6>
                                                    <p className="fs-14 mb-xl-20">Home Loan in India can primarily be classified into two based on interest rates: fixed rate and floating rate of interest.</p>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Fixed Rate of Interest</h6>
                                                    <p className="fs-14 mb-xl-20">This refers to repayment of loans in fixed equal installments over the entire tenure of the loan. Market fluctuations does not change the interest rate in this Fixed Rate of Interest. In this type of Interest rate, the monthly payments are used to against the interest during the early of part of the repayment period and the principal is adjusted with in the later parts of the tenure. </p>

                                                    <p className="fs-14 mb-xl-20">Benefits of fixed rate of interest:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Fixed monthly instalments</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Market fluctuations does not impact the Interest rates</li>
                                                        </ul>
                                                    </div>

                                                    <p className="fs-14 mb-xl-20">Drawbacks of fixed rate of interest:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Higher Interest rates when compared to the Floating rates</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Higher pre-payment penalties</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Change of interest rates at the discretion of the banks</li>
                                                        </ul>
                                                    </div>

                                                    <h6 className=" fw-700 text-dark text-uppercase">Floating Rate of Interest</h6>
                                                    <p className="fs-14 mb-xl-20">Floating interest rate means that the rate of interest varies as per the market conditions. Generally, there is a base rate plus a floating component in the Floating rate of interest. It simply means that if the base rate varies, the floating interest rate also varies. Base rate is on the basis of the rate fixed by the bank and the floating rate is basis the market conditions. So if the base rate varies, the floating rate also varies. The change can be either in the tenure or in the EMI. However, the customer can choose between the EMI or the tenure. </p>

                                                    <p className="fs-14 mb-xl-20">Benefits of Floating rate of interest:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Cheaper interest rates when compared to the Fixed rate</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Repayment Flexibility</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Works well in the long run</li>
                                                        </ul>
                                                    </div>

                                                    <p className="fs-14 mb-xl-20">Drawbacks of Floating rates of Interest:</p>
                                                    <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                                        <ul>
                                                            <li className="fs-14"><i className="fas fa-check" /> Requires a close and regular monitoring</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Fluctuations in instalments</li>
                                                            <li className="fs-14"><i className="fas fa-check" /> Risk in managing cash flow and can disrupt planning</li>
                                                        </ul>
                                                    </div>
                                                    <p className="fs-14 mb-xl-20">There are dual rate of interest offered by some banks. In such a scenario the interest rates remain fixed for initial 1 to 5 years and then moves to a floating rate of interest. However, the choice at the discretion of the borrower.  Your Home Loan EMI depends upon the interest rate the bank charges you, the tenure oof your loan and the loan amount. You can decide and alter the loan tenure and interest rates to see how you can reduce either of it.</p>
                                                    <p className="fs-14 mb-xl-20">Make an informed decision by connecting with Moneymithra if you are planning a home purchase are looking at loan products, look no further.Moneymithra will help you get the best deals on loans. View our EMI Calculator which will help you calculate how much EMI is payable every month.</p>


                                                    <h6 className=" fw-700 text-dark text-uppercase">Home Loan Balance Transfer</h6>
                                                    <p className="fs-14 mb-xl-20">A Home Loan Balance Transfer can help you in enabling your saving by getting a good deal on your Home Loan. A balance transfer can also help in getting a top up loan from a bank and help you repay your other loans and have one consolidate loan in one bank.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2" className="container">
                                                <div className="loan-tab-content">
                                                    <div className="table-responsive">
                                                        <table className="lw-tab-table loan-table">
                                                            <tbody>
                                                                <tr className="lw-table-row-1">
                                                                    <th colSpan="2">Home Loan Details</th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Loan Amount</strong></td>
                                                                    <td className="lw-table-data-2">Rs. 5 lakhs and above</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Interest Rate</strong></td>
                                                                    <td className="lw-table-data-2">6.85% onward</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Tenure</strong></td>
                                                                    <td className="lw-table-data-2">Upto 30 years</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Processing Fee</strong></td>
                                                                    <td className="lw-table-data-2">0.5% onwards</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lw-table-data-1"><strong>Foreclosure Fee</strong></td>
                                                                    <td className="lw-table-data-2">0%</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab3" className="container">
                                                <div className="loan-tab-content">
                                                    <h4 className="text-uppercase text-center text-light-blue">Apply for Home Loan</h4>
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