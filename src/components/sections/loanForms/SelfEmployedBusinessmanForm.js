import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import Loader from '../../layouts/Loader';
import axios from 'axios';

function SelfEmployedBusinessmanForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    const [loading, setloading] = useState(false);

    const onSubmit = loanData => {
        setloading(true);
        axios.post('/selfEmployedAndBusinessman', loanData)
            .then((res) => {
                if (res.data.status === 'success') {
                    console.log('Message sent')
                    setloading(false);
                } else if (res.data.status === 'fail') {
                    console.log('Failed Message')
                    setloading(false);
                }
            })
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
                            <label className="text-left">Loan Amount Needed <sup>*</sup></label>
                            <NumberFormat thousandSeparator={true}
                                thousandsGroupStyle="lakh" prefix={"₹ "}
                                type="text" className="form-control" {...register("loanAmtNeeded", { required: true, min: 10000, maxLength: 14, minLength: 8 })} />
                            <span className="errorMsg">
                                {errors.loanAmtNeeded?.type === 'required' && "Loan Amount Needed is required"}
                                {errors.loanAmtNeeded?.type === 'maxLength' && "Maximum Loan Amount must not exceed Rs. 99,99,99,999"}
                                {errors.loanAmtNeeded?.type === 'min' && "Enter Min 10,000 Loan Amount"}
                                {errors.loanAmtNeeded?.type === 'minLength' && "Enter Min 10,000 Loan Amount"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Type Of Incorporation <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("typeOfIncorporation", { required: true })}>
                                <option value="">Select Type Of Incorporation</option>
                                <option value="Proprietorship">Proprietorship</option>
                                <option value="Partnership/ LLP">Partnership/ LLP</option>
                                <option value="Company - Pvt Ltd/ Limited">Company - Pvt Ltd/ Limited</option>
                            </select>
                            <span className="errorMsg">
                                {errors.typeOfIncorporation?.type === 'required' && "Type Of Incorporation is required"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Type Of Business <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("typeOfBusiness", { required: true })}>
                                <option value="">Select Type Of Business</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Retailers and Traders">Retailers and Traders</option>
                                <option value="Services">Services</option>
                                <option value="Real Estate, Infra and Power">Real Estate, Infra and Power</option>
                            </select>
                            <span className="errorMsg">
                                {errors.typeOfBusiness?.type === 'required' && "Type Of Business is required"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">No. of Years of ITR Available <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("noYearsOfITR", { required: true })}>
                                <option value="">Select ITR Available</option>
                                <option value="None">None</option>
                                <option value="1 year">1 year</option>
                                <option value="2 years">2 years</option>
                                <option value="3 years or more">3 years or more</option>
                            </select>
                            <span className="errorMsg">
                                {errors.noYearsOfITR?.type === 'required' && "No. of Years of ITR is required"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Annual Turnover <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("annualTurnover", { required: true })}>
                                <option value="">Select Annual Turnover</option>
                                <option value="Less than Rs. 12 lakh">Less than Rs. 12 lakh</option>
                                <option value="Rs 12 lakh - 30 lakh">Rs 12 lakh - 30 lakh</option>
                                <option value="Rs. 30 - 50 lakh">Rs. 30 - 50 lakh</option>
                                <option value="Rs. 50 lakh - 1 crore">Rs. 50 lakh - 1 crore</option>
                                <option value="More than 1 crore">More than 1 crore</option>
                            </select>
                            <span className="errorMsg">
                                {errors.annualTurnover?.type === 'required' && "Annual Turnover is required"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Years in Business <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("yearsInBusiness", { required: true })}>
                                <option value="">Select Business Running Since</option>
                                <option value="Less than 1 year">Less than 1 year</option>
                                <option value="1 year - 2 years">1 year - 2 years</option>
                                <option value="2 years - 3 years">2 years - 3 years</option>
                                <option value="3 years or more">3 years or more</option>
                            </select>
                            <span className="errorMsg">
                                {errors.yearsInBusiness?.type === 'required' && "Years in Business is required"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Do you File GST Return? <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("fileGSTReturn", { required: true })}>
                                <option value="">Select If GST Return</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <span className="errorMsg">
                                {errors.fileGSTReturn?.type === 'required' && "File GST Return is required"}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Date of Birth <sup>*</sup></label>
                            <input type="date" className="form-control datepickrnew form-control-custom" placeholder="01/01/1960" {...register("dob", { required: true })} />
                            <span className="errorMsg">
                                {errors.dob?.type === 'required' && "Date of Birth is required"}
                            </span>
                        </div>
                    </div>
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
            </form>
        </div>
    )
}

export default SelfEmployedBusinessmanForm
