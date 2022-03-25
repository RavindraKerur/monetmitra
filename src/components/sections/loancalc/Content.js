import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 50000,
            show: true,
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1000 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1000) {
            this.setState({
                clicks: 50000,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1000,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    render() {
        return (
            <section className="section-padding-bottom ln-loan-calculator-style">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="ln-loan-calculator-wrap">
                                <h4 className="text-center text-custom-black fw-600">Customize your loan</h4>
                                <p className="text-custom-black text-center">Adjust the loan amount to see your options</p>
                                <div className="loan-price-wrap">
                                    <div className="quantity mb-xl-20">
                                    <input type="text" name="clicks" className="form-control form-control-custom" value={this.state.clicks} onChange={this.handleChange.bind(this)} readOnly />
                                        <button className="minus-btn btn-first btn-submit-fill btn-height" type="button" name="button" onClick={this.DecreaseItem}> <i className="fas fa-minus" data-type="minus"/></button>
                                        <button className="plus-btn btn-first btn-submit-fill btn-height border-0" type="button" name="button" onClick={this.IncrementItem}> <i className="fas fa-plus" data-type="plus"/></button>
                                    </div>
                                    <p className="text-center text-light-grey">You can borrow between $1,000 - $1,00,000</p>
                                    <div className="form-group">
                                        <div className="custom-radio">
                                            <input id="loanstep1" defaultChecked name="loanstep" defaultValue={30} type="radio" />
                                            <label htmlFor="loanstep1">
                                                <span className="upper-text">
                                                    Repay With
                    <span>One-Time Fee</span>
                                                </span>
                                                <span className="bottom-text">
                                                    <span>30% <small className="fw-600">of sales</small></span>
                                                    <span>$1,672</span>
                                                </span>
                                                <span className="radio-loan-amount-wrap">
                                                    <span className="top-text">
                                                        Total You Pay
                      <span className="fw-600">$43,000</span>
                                                    </span>
                                                    <span className="btm-text">
                                                        Estimated Time To Repay
                      <span className="fw-600">
                                                            12 Months
                      </span>
                                                    </span>
                                                </span>
                                            </label>
                                            <input type="hidden" name="intrest-30" id="intrest-30" defaultValue={30} />
                                            <input type="hidden" name="months-30" id="months-30" defaultValue={12} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-radio">
                                            <input id="loanstep2" name="loanstep" defaultValue={25} type="radio" />
                                            <label htmlFor="loanstep2">
                                                <span className="upper-text">
                                                    Repay With
                    <span>One-Time Fee</span>
                                                </span>
                                                <span className="bottom-text">
                                                    <span>25% <small className="fw-600">of sales</small></span>
                                                    <span>$2,027</span>
                                                </span>
                                                <span className="radio-loan-amount-wrap">
                                                    <span className="top-text">
                                                        Total You Pay
                      <span className="fw-600">$43,000</span>
                                                    </span>
                                                    <span className="btm-text">
                                                        Estimated Time To Repay
                      <span className="fw-600">
                                                            12 Months
                      </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-radio">
                                            <input id="loanstep3" name="loanstep" defaultValue={20} type="radio" />
                                            <label htmlFor="loanstep3">
                                                <span className="upper-text">
                                                    Repay With
                    <span>One-Time Fee</span>
                                                </span>
                                                <span className="bottom-text">
                                                    <span>20% <small className="fw-600">of sales</small></span>
                                                    <span>$2,749</span>
                                                </span>
                                                <span className="radio-loan-amount-wrap">
                                                    <span className="top-text">
                                                        Total You Pay
                      <span className="fw-600">$43,000</span>
                                                    </span>
                                                    <span className="btm-text">
                                                        Estimated Time To Repay
                      <span className="fw-600">
                                                            12 Months
                      </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-radio">
                                            <input id="loanstep4" name="loanstep" defaultValue={15} type="radio" />
                                            <label htmlFor="loanstep4">
                                                <span className="upper-text">
                                                    Repay With
                    <span>One-Time Fee</span>
                                                </span>
                                                <span className="bottom-text">
                                                    <span>15% <small className="fw-600">of sales</small></span>
                                                    <span>$4,080</span>
                                                </span>
                                                <span className="radio-loan-amount-wrap">
                                                    <span className="top-text">
                                                        Total You Pay
                      <span className="fw-600">$43,000</span>
                                                    </span>
                                                    <span className="btm-text">
                                                        Estimated Time To Repay
                      <span className="fw-600">
                                                            12 Months
                      </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="custom-radio">
                                            <input id="loanstep5" name="loanstep" defaultValue={10} type="radio" />
                                            <label htmlFor="loanstep5">
                                                <span className="upper-text">
                                                    Repay With
                    <span>One-Time Fee</span>
                                                </span>
                                                <span className="bottom-text">
                                                    <span>10% <small className="fw-600">of sales</small></span>
                                                    <span>$7,394</span>
                                                </span>
                                                <span className="radio-loan-amount-wrap">
                                                    <span className="top-text">
                                                        Total You Pay
                      <span className="fw-600">$43,000</span>
                                                    </span>
                                                    <span className="btm-text">
                                                        Estimated Time To Repay
                      <span className="fw-600">
                                                            12 Months
                      </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
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