import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import Loader from '../../layouts/Loader';
import axios from 'axios';

function SalariedBalTransfer() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    const [payingEMI, setPayingEMI] = useState('No');
    const [loading, setloading] = useState(false);

    const onSubmit = loanData => {
        setloading(true);
        axios.post('/salariedAndBalanceTransfer', loanData)
            .then((res) => {
                if (res.data.status === 'success') {
                    console.log('Message sent');
                    setloading(false);
                } else if (res.data.status === 'fail') {
                    console.log('Failed Message');
                    setloading(false);
                }
            })
    }

    const updateCategory = (e) => {
        if (e.target.checked) {
            setPayingEMI(e.target.value);
            console.log(e.target.value);
        }
    }

    return (
        <div className="loanformContent">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Full Name (As per PAN Card) <sup>*</sup></label>
                            <input type="text" className="form-control" {...register("fullName", { required: true, maxLength: 100, pattern: /^[A-Za-z ]+$/i })} />
                            <span className="errorMsg">
                                {errors.fullName?.type === 'required' && "Full Name is required"}
                                {errors.fullName?.type === 'maxLength' && "Full Name must be 100 characters in length"}
                                {errors.fullName?.type === 'pattern' && "Only character are allowed"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Mobile Number <sup>*</sup></label>
                            <NumberFormat type="tel" className="form-control" {...register("mobileNo", { required: true, minLength: 10, maxLength: 10 })} />
                            <span className="errorMsg">
                                {errors.mobileNo?.type === 'required' && "Mobile Number is required"}
                                {errors.mobileNo?.type === 'maxLength' && "Mobile Number must be 10 numbers in length"}
                                {errors.mobileNo?.type === 'minLength' && "Enter valid Mobile number"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Net Monthly Income <sup>*</sup></label>
                            <NumberFormat thousandSeparator={true}
                                thousandsGroupStyle="lakh" type="text" className="form-control" prefix={"₹ "}
                                {...register("netMonthlyIncome", { required: true, maxLength: 11, minLength: 8, min: 10000 })} />
                            <span className="errorMsg">
                                {errors.netMonthlyIncome?.type === 'required' && "Net Monthly Income is required"}
                                {errors.netMonthlyIncome?.type === 'maxLength' && "Net Monthly Income must not exceed Rs. 99,99,999"}
                                {errors.netMonthlyIncome?.type === 'min' && "Enter min Rs. 10,000"}
                                {errors.netMonthlyIncome?.type === 'minLength' && "Enter min Rs. 10,000"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Place of Current Residence or Pincode <sup>*</sup></label>
                            <input type="text" className="form-control" {...register("curResiPincode", { required: true, maxLength: 100, pattern: /^[A-Za-z0-9]+$/i })} />
                            <span className="errorMsg">
                                {errors.curResiPincode?.type === 'required' && "Current Residence or Pincode is required"}
                                {errors.curResiPincode?.type === 'maxLength' && "Current Residence or Pincode must be 100 characters length"}
                                {errors.curResiPincode?.type === 'pattern' && "Only characters and numbers are allowed"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Choose Your Employer type <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("employerType", { required: true })}>
                                <option value="">Select Employer Type </option>
                                <option value="Pvt / MNC Job">Pvt / MNC Job</option>
                                <option value="Government Job">Government Job</option>
                                <option value="Proprietorship / Partnership / LLP">Proprietorship / Partnership / LLP</option>
                            </select>
                            <span className="errorMsg">
                                {errors.employerType?.type === 'required' && "Employer Type is required"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Existing Loan Form <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("existingLoanForm", { required: true })}>
                                <option value="">Select Bank</option>
                                <option value="Axis Bank">Axis Bank</option>
                                <option value="ICICI Bank">ICICI Bank</option>
                                <option value="Kotak Bank">Kotak Bank</option>
                                <option value="Citibank">Citibank</option>
                                <option value="Bank of Baroda">Bank of Baroda</option>
                                <option value="PNB">PNB</option>
                                <option value="SBI">SBI</option>
                                <option value="HDFC Bank">HDFC Bank</option>
                                <option value="Other Bank">Other Bank</option>
                            </select>
                            <span className="errorMsg">
                                {errors.existingLoanForm?.type === 'required' && "Existing Loan Form is required"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Current Loan Outstanding <sup>*</sup></label>
                            <NumberFormat thousandSeparator={true}
                                thousandsGroupStyle="lakh" type="text" className="form-control" prefix={"₹ "}
                                {...register("currentLoanOutstanding", { required: true, maxLength: 12, minLength: 1, min: 0 })} />
                            <span className="errorMsg">
                                {errors.currentLoanOutstanding?.type === 'required' && "Current Loan Outstanding is required"}
                                {errors.currentLoanOutstanding?.type === 'maxLength' && "Maximum Loan Amount must not exceed Rs. 99,99,99,999"}
                                {errors.currentLoanOutstanding?.type === 'min' && "Enter valid minimum Amount"}
                                {errors.currentLoanOutstanding?.type === 'minLength' && "Enter valid minimum Amount"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Current Interest Rate on Loan <sup>*</sup></label>
                            <div style={{ position: "relative" }}>
                                <NumberFormat type="text" className="form-control" decimalScale="2" fixedDecimalScale="true"
                                    style={{ paddingLeft: '15px' }}
                                    {...register("currentInterestRate", { required: true, minLength: 1, maxLength: 5, min: 9, max: 25 })} />
                                <div style={{ position: "absolute", top: '0', fontSize: '14px', color: "#6c757d" }}>%</div>
                            </div>
                            <span className="errorMsg">
                                {errors.currentInterestRate?.type === 'required' && "Current Interest Rate on Loan is required"}
                                {errors.currentInterestRate?.type === 'maxLength' && "Enter Current Interest Rate on Loan"}
                                {errors.currentInterestRate?.type === 'max' && "Enter Current Interest Rate on Loan"}
                                {errors.currentInterestRate?.type === 'min' && "Enter Current Interest Rate on Loan"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="radio-box form-group">
                            <div style={{marginBottom: '19px'}}>
                                <p style={{paddingBottom: '10px'}}>Do you currently pay any EMI?</p>
                                <span style={{ position: "relative" }}>
                                    <input style={{ position: "initial" }}
                                        type="radio"
                                        name="emi"
                                        value="Yes"
                                        checked={payingEMI === 'Yes'}
                                        {...register("currentlyEMI")}
                                        onChange={updateCategory}
                                    /> &nbsp; 
                                    <span className="fs-14">Yes</span>
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{ position: "relative" }}>
                                    <input style={{ position: "initial" }}
                                        type="radio"
                                        name="emi"
                                        value="No"
                                        checked={payingEMI === 'No'}
                                        {...register("currentlyEMI")}
                                        onChange={updateCategory}
                                    /> &nbsp; 
                                    <span className="fs-14">No</span>
                                </span>
                            </div>

                        </div>
                    </div>
                    {
                        payingEMI === "Yes" &&
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="text-left">Total EMI Amount <sup>*</sup></label>
                                <NumberFormat thousandSeparator={true}
                                    thousandsGroupStyle="lakh" type="text" className="form-control" prefix={"₹ "}
                                    {...register("totalEMIAmount", { required: true, maxLength: 14, minLength: 1, min: 0 })} />
                                <span className="errorMsg">
                                    {errors.totalEMIAmount?.type === 'required' && "Total EMI Amount is required"}
                                    {errors.totalEMIAmount?.type === 'maxLength' && "Maximum Total EMI Amount must not exceed Rs. 99,99,99,999"}
                                    {errors.totalEMIAmount?.type === 'min' && "Enter valid minimum Amount"}
                                    {errors.totalEMIAmount?.type === 'minLength' && "Enter valid minimum Amount"}
                                </span>
                            </div>
                        </div>
                    }
                    <div className="col-12">
                        <div className="form-group">
                            <label className="custom-checkbox text-custom-black">
                                <input type="checkbox" defaultChecked {...register("tAndC", { required: true })} />
                                <span className="checkmark" />
                                <span className="checkmark-info fs-12">I authorize Moneymithra and its partners to contact me. This overrides my number being in the NDNC registry.</span>
                                <span className="errorMsg checkmark-info fs-12">
                                    {errors.tAndC?.type === 'required' && "Please accept"}
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn-first btn-submit-red-dark btn-submit text-custom-white">Submit</button>
                    </div>
                    {
                        loading ? <div className="loader"><Loader /></div> : ''
                    }
                </div>
            </form >
        </div >
    )
}

export default SalariedBalTransfer
