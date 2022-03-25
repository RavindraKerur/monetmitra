import React, { Component } from 'react';

class Aboutus extends Component {
    render() {
        return (
            <section className="section-padding about-us-sec p-relative">
                {/* <div className="side-lines"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div> */}
                <div className="container dark-red">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="section-header">
                                <div className="section-heading">
                                    <h3 className=" fw-700 text-dark text-uppercase">About Moneymithra</h3>
                                </div>
                            </div>
                            <div className="about-left-side mb-md-40 ">
                                <p className="fs-14 mb-xl-20">Incorporated in February 2020, Moneymithra Services Pvt Ltd is a Direct Selling Agency (DSA) who are authorized to deal in financial services of various banking partners.The fundamental focus of Moneymithra is its dedication and expertise in our quest to provide best quality service to our customers. Service that is benchmarked against the industry best. We are an organization where we believe in simplifying a tedious process to empower you to realize your dreams. </p>
                                <p>Moneymithra offers you, not only an exhaustive range of options but also a tailor- made solution for your varied financial needs. Moneymithra is spearheaded by an Industry veteran along with experienced team of professionals with Industry expertise making it a reliable and preferred organization for any kind of financial product such as Personal Loans, Home Loans, Doctor Loans, Business Loan, Mortgage Loan, Car Loan, Education Loan, Credit Cards and much more.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="full-height">
                                <img src={process.env.PUBLIC_URL + "/assets/images/about-moneymithra.jpg"} className="img-fluid image-fit" alt="about us" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light-white-skew-2 bg-custom-black" />
            </section>
        );
    }
}

export default Aboutus;