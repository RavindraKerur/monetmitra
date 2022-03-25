import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import Loader from '../../layouts/Loader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SalariedNewLoanForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'all' });
    const [loading, setloading] = useState(false);

    const onSubmit = loanData => {
        setloading(true);
        axios.post('/salariedAndNewLoan', loanData)
            .then((res) => {
                if (res.data.status === 'success') {
                    console.log('Message sent');
                    reset();
                    toast.success('Thank you for contacting us. We will be in touch with you very soon.');
                    setloading(false);
                } else if (res.data.status === 'fail') {
                    console.log('Failed Message');
                    setloading(false);
                    toast.error('Something went wrong!');
                }
            })
    }

    return (
        <div className="loanformContent">
            <form onSubmit={handleSubmit(onSubmit)} className="form-layout-1">
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
                    <ToastContainer autoClose={5000}  />
                </div>
            </form>
        </div>
    )
}

export default SalariedNewLoanForm
