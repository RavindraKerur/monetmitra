import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, NavLink } from 'react-bootstrap';

class Faqs extends Component {
    render() {
        return (
            <section className="section-padding loan-faqs-sec bg-light-white">
                {/* findrate-top */}
                {/* <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8">
                            <div className="findratesec">
                                <h3 className="text-custom-black">Compare personal loan rates in 2 minutes</h3>
                                <div className="input-form-box">
                                    <form>
                                        <div className="input-group">
                                            <input type="email" name="#" className="form-control form-control-custom" placeholder="Enter amount ($1,000 to $100,000)" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn-first btn-submit-fill">Find My Rate</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container dark-red">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 align-self-center">
                            <div className="section-header">
                                <div className="section-heading">
                                    <h3 className="text-custom-black fw-700">Our FAQs</h3>
                                    <div className="section-description">
                                        <p className="text-light-white no-margin">Still have questions?
                                        <br />Our Client Success Team is always here to help</p>
                                    </div>
                                </div>
                            </div>
                            <div className="loan-faqs-leftside mb-md-80">
                                <div className="support-card mb-xl-20">
                                    <div className="support-user">
                                        {/* <img src={process.env.PUBLIC_URL + "/assets/images/faq-user.png"} className="image-fit" alt="img" /> */}
                                        <i class="fas fa-business-time"></i>
                                    </div>
                                    <div className="links text-center mb-xl-20"> <Link to="#">support@moneymithra.com</Link>
                                        <Link to="#">+91 9880013358</Link>
                                        {/* <Link to="#">Chat with us</Link> */}
                                    </div>
                                    <div className="schdule">
                                        <ul className="custom">
                                            <li>Mon - Sat <span className="text-light-white">9am – 6pm IST</span>
                                            </li>
                                            <li>Sun <span className="text-light-white">9am – 4pm IST</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 align-self-center">
                            <Accordion defaultActiveKey="0" className="faqs-accordion">
                                <Card>
                                    <Accordion.Collapse eventKey="0" className="collapseparent">
                                        <Card.Body>
                                            <p>Credit report rating is a crucial determining factor for your loan and interest rates. The better your credit rating the more likely you are to get the lowest interest rates on your loan. For those with a bad credit profile, the higher interest rates as it reflects an increased risk on the part of the creditors in lending the money.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} className="collapsebtn" variant="link" eventKey="0">
                                            How will a person’s my credit profile affect his/her ability to get the best loan rates?</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="1" className="collapseparent">
                                        <Card.Body>
                                            <p className="no-margin">In case where a customer’s financial circumstances improve, he/she will be in a position to pay off the loan before the tenure, or may be in a position to arrange to change the payment plan in some way, is such an instance customer needs to discuss details of this with the Bank/NDFC the customer has their loan in.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} className="collapsebtn" variant="link" eventKey="1">During the loan term, if the customer’s financial situation change, what should they do?</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="2" className="collapseparent">
                                        <Card.Body>
                                            <p>Considering that there are higher administrations costs involved in setting up the loan, generally if the term of the loan is shorted the interest rates are higher.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} className="collapsebtn" variant="link" eventKey="2">How is it that the interest is higher for short term loans?</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="3" className="collapseparent">
                                        <Card.Body>
                                            <p>This is depended on varies on several factors. In case of a salaried employee, the monthly EMI should ideally not exceed 40% of the monthly pay. Also, the lending bank/NBFC will take into consideration if there are any existing loans for which the individual is paying EMIs. For self- employed individuals it will be on the basis of the profits that are earned through their business. Here as well, other financial liabilities of the borrower will be taken into consideration.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} className="collapsebtn" variant="link" eventKey="3">What is the maximum amount that one can borrow from a bank?</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="4" className="collapseparent">
                                        <Card.Body>
                                            <p>The following should be taken into consideration while applying for a personal loan:</p>
                                            <p><strong>Interest Rates:</strong> One of the most important and essential aspect is the interest rate charged for a personal loan. It can vary from 10% P.A. to as high as 24% P.A., based on the bank/NBFCs terms and conditions and the borrowers credit score. Interest rates amounts to a substantial cost to the cumulative cost of the loan.</p>
                                            <p><strong>Flexibility for Repayment:</strong> One must be sure of the part-payments or pre-payments terms of the Banks/NBFCs and the part-payment, pre-payment charges levied.</p>
                                            <p><strong>Processing Fee:</strong> Even if you are offered a low interest rate, a high processing fee could bump up the cost of your loan.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} className="collapsebtn" variant="link" eventKey="4">Things that a customer should consider before applying for a personal loan?</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="5" className="collapseparent">
                                        <Card.Body>
                                            <p className="no-margin">This may vary from bank to bank. Certain banks/NBFCs have the option of pre-paying the loan amount, based on their respective terms and conditions. This is generally allowed, however, with a pre-payment fee.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} className="collapsebtn" variant="link" eventKey="5">Is pre-payment allowed for personal loans?</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="6" className="collapseparent">
                                        <Card.Body>
                                            <p>There will be a certain ECS bounce charge/penalty. Also, this gets reflected in your credit report and affects your credit score. There can be severe implications on future possibilities of credits depending on the severity of the default. In addition, the banks can also take legal action against the borrower. </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} className="collapsebtn" variant="link" eventKey="6">What are the implications if I miss there is an ECS Bounce or I an EMI Payment?</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="7" className="collapseparent">
                                        <Card.Body>
                                            <p className="no-margin">Pre-Closure is when a customer wishes to pay off the entire principal outstanding amount at once. On the other hand, Part-Payment is when the customer wants to repay only a certain portion of the outstanding amount.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} className="collapsebtn" variant="link" eventKey="7">What is the difference between Pre-Closure and Part – Payment?</Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faqs;