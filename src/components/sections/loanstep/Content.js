import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <section className="section-padding loan-steps">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="step-wrapper">
                                <div className="icon-box">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/loan-step-icon.png"} alt="img" />
                                </div>
                                <h4 className="text-custom-black text-center fw-600">Tell us why you're looking for a loan</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <div className="custom-radio">
                                                    <input id="loanstep1" defaultChecked name="loanstep" type="radio" value="Debt Consolidation" />
                                                    <label htmlFor="loanstep1">Debt Consolidation</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-radio">
                                                    <input id="loanstep2" name="loanstep" type="radio" value="Credit card refinancing" />
                                                    <label htmlFor="loanstep2">Credit card refinancing</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-radio">
                                                    <input id="loanstep3" name="loanstep" type="radio" value="Home improvement" />
                                                    <label htmlFor="loanstep3">Home improvement</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-radio">
                                                    <input id="loanstep4" name="loanstep" type="radio" value="Major purchase" />
                                                    <label htmlFor="loanstep4">Major purchase</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control form-control-custom custom-select">
                                                    <option value="More options">More options</option>
                                                    <option value="Medical Expenses">Medical Expenses</option>
                                                    <option value="Car Financing">Car Financing</option>
                                                    <option value="Moving/relocation">Moving/relocation</option>
                                                    <option value="Business">Business</option>
                                                    <option value="Special Occasion">Special Occasion</option>
                                                    <option value="Wedding">Wedding</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn-first btn-submit-fill text-custom-white full-width">Continue</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;