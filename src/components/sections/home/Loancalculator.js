import React, { useState } from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import { DebounceInput } from 'react-debounce-input';
import Toast from 'react-bootstrap/Toast'

function Loancalculator() {
    const [pAmount, setpAmount] = useState(2755000);
    const [interest, setInterest] = useState(7);
    const [duration, setDuration] = useState(147); // in months
    const maxValue = 6000000;
    const minpAmt = 500;
    const minInts = 5;
    const intMax = 20;
    const maxDuration = 360;
    const minDuration = 12;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;
    var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfIntrest = Math.round(totalAmt - TotalAmountOfCredit);

    const [show, setShow] = useState(false);
    const [numShow, setNumShow] = useState(false);
    const [intrShow, setIntrShow] = useState(false);
    const [intrNumShow, setIntrNumShow] = useState(false);
    const [durationErrShow, setDurationErrShow] = useState(false);
    const [durationErrNumShow, setDurationErrNumShow] = useState(false);

    const onUpdate = (e) => {
        setpAmount(e);
    }
    const onLoanAmountUpdate = (e) => {
        var numbers = /^[0-9]+$/;
        if (e.target.value.match(numbers)) {
            var value = Number(e.target.value);
            if (value < minpAmt || value > maxValue) {
                setShow(true);
                return false
            } else {
                setpAmount(value);
            }
        } else {
            setNumShow(true);
            return false;
        }
    }

    const onIntrestUpdate = (e) => {
        setInterest(e)
    }

    const onInputInterestUpdate = (e) => {
        var numbers = /^[0-9]+$/;
        if (e.target.value.match(numbers)) {
            var value = Number(e.target.value);
            if (value < minInts || value > intMax) {
                setIntrShow(true);
                return false
            } else {
                setInterest(value);
            }
        } else {
            setIntrNumShow(true);
            return false;
        }
    }

    const onDurationUpdate = (e) => {
        setDuration(e)
    }

    const onInputDurationUpdate = (e) => {
        var numbers = /^[0-9]+$/;
        if (e.target.value.match(numbers)) {
            var value = Number(e.target.value);
            if (value < minDuration || value > maxDuration) {
                setDurationErrShow(true);
                return false
            } else {
                setDuration(value);
            }
        } else {
            setDurationErrNumShow(true);
            return false
        }
    }

    return (
        <section className="section-padding pb-6 exp-cal2">
            <div className="container dark-red">
                <div className="section-header">
                    <div className="section-heading">
                        <h3 className="text-white fw-700">Loan Calculator</h3>
                        <div className="section-description">
                            <p className="text-light-white">Thinking of what you will need to pay if you avail a loan? Don’t guess, Be Sure with our easy-to-understand EMI Calculator.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="exp-cal2-loan">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <div className="label-input-err">
                                            <label className="text-dark-red">Loan Amount</label>
                                            <DebounceInput type="text" value={pAmount} debounceTimeout={800} onChange={onLoanAmountUpdate} />
                                            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                                <Toast.Body>Loan amount must be in the {minpAmt} and {maxValue} range</Toast.Body>
                                            </Toast>
                                            <Toast onClose={() => setNumShow(false)} show={numShow} delay={3000} autohide>
                                                <Toast.Body>Loan amount must be in Numbers</Toast.Body>
                                            </Toast>
                                        </div>
                                        <div className="inputRange">
                                            <InputRange
                                                maxValue={maxValue}
                                                minValue={minpAmt}
                                                value={pAmount}
                                                onChange={onUpdate}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="label-input-err">
                                            <label className="text-dark-red">Interest Rate %</label>
                                            <DebounceInput type="text" debounceTimeout={800} value={interest} onChange={onInputInterestUpdate} />
                                            <Toast onClose={() => setIntrShow(false)} show={intrShow} delay={3000} autohide>
                                                <Toast.Body>Intrest rate must be in the {minInts} and {intMax} range</Toast.Body>
                                            </Toast>
                                            <Toast onClose={() => setIntrNumShow(false)} show={intrNumShow} delay={3000} autohide>
                                                <Toast.Body>Intrest rate must be in Numbers</Toast.Body>
                                            </Toast>
                                        </div>
                                        <div className="inputRange">
                                            <InputRange
                                                maxValue={intMax}
                                                minValue={minInts}
                                                value={interest}
                                                onChange={onIntrestUpdate}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="label-input-err">
                                            <label className="text-dark-red">Tenure (Months)</label>
                                            <DebounceInput type="text" debounceTimeout={800} value={duration} onChange={onInputDurationUpdate} />
                                            <Toast onClose={() => setDurationErrShow(false)} show={durationErrShow} delay={3000} autohide>
                                                <Toast.Body>Duration must be in the {minDuration} and {maxDuration} range</Toast.Body>
                                            </Toast>
                                            <Toast onClose={() => setDurationErrNumShow(false)} show={durationErrNumShow} delay={3000} autohide>
                                                <Toast.Body>Duration must be in Numbers</Toast.Body>
                                            </Toast>
                                        </div>
                                        <div className="inputRange">
                                            <InputRange
                                                maxValue={maxDuration}
                                                minValue={minDuration}
                                                value={duration}
                                                onChange={onDurationUpdate}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="loan-calc-details">
                                        <div className="table-responsive">
                                            <table className="lw-tab-table loan-table">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-light-blue"><strong>Loan Amount</strong></td>
                                                        <td><span style={{ fontFamily: 'Montserrat' }}>₹</span> {pAmount}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-light-blue"><strong>Interest %</strong></td>
                                                        <td>{interest}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-light-blue"><strong>Tenure (Months)</strong></td>
                                                        <td>{duration}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-light-blue"><strong>EMI (Monthly)</strong></td>
                                                        <td><span style={{ fontFamily: 'Montserrat' }}>₹</span> {emi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-light-blue"><strong>Total Interest</strong></td>
                                                        <td><span style={{ fontFamily: 'Montserrat' }}>₹</span> {TotalAmountOfIntrest}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-light-blue"><strong>Total Payment (Loan Amount + Interest)</strong></td>
                                                        <td><span style={{ fontFamily: 'Montserrat' }}>₹</span> {totalAmt}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Loancalculator