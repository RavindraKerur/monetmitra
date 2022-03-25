import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import Loader from '../../layouts/Loader';
import axios from 'axios';

const options = [
    { value: '', label: 'Select Degree Year' },
    { value: '1961', label: '1961' },
    { value: '1962', label: '1962' },
    { value: '1963', label: '1963' },
    { value: '1964', label: '1964' },
    { value: '1965', label: '1965' },
    { value: '1966', label: '1966' },
    { value: '1967', label: '1967' },
    { value: '1968', label: '1968' },
    { value: '1969', label: '1969' },
    { value: '1970', label: '1970' },
    { value: '1971', label: '1971' },
    { value: '1972', label: '1972' },
    { value: '1973', label: '1973' },
    { value: '1974', label: '1974' },
    { value: '1978', label: '1978' },
    { value: '1979', label: '1979' },
    { value: '1980', label: '1980' },
    { value: '1981', label: '1981' },
    { value: '1981', label: '1981' },
    { value: '1982', label: '1982' },
    { value: '1983', label: '1983' },
    { value: '1984', label: '1984' },
    { value: '1985', label: '1985' },
    { value: '1986', label: '1986' },
    { value: '1987', label: '1987' },
    { value: '1988', label: '1988' },
    { value: '1989', label: '1989' },
    { value: '1990', label: '1990' },
    { value: '1991', label: '1991' },
    { value: '1992', label: '1992' },
    { value: '1993', label: '1993' },
    { value: '1994', label: '1994' },
    { value: '1995', label: '1995' },
    { value: '1996', label: '1996' },
    { value: '1997', label: '1997' },
    { value: '1998', label: '1998' },
    { value: '1999', label: '1999' },
    { value: '2000', label: '2000' },
    { value: '2001', label: '2001' },
    { value: '2002', label: '2002' },
    { value: '2004', label: '2004' },
    { value: '2005', label: '2005' },
    { value: '2006', label: '2006' },
    { value: '2007', label: '2007' },
    { value: '2008', label: '2008' },
    { value: '2009', label: '2009' },
    { value: '2010', label: '2010' },
    { value: '2011', label: '2011' },
    { value: '2012', label: '2012' },
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' }
];

function SelfEmployedProfessionalForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    const [loading, setloading] = useState(false);

    const onSubmit = loanData => {
        setloading(true);
        axios.post('/selfEmployedAndProfessional', loanData)
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

    return (
        <div className="loanformContent">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-left">Select Your Profession <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("yourProfession", { required: true })}>
                                <option value="">Select Profession</option>
                                <option value="Architect">Architect</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Chartered Accountant (CA)">Chartered Accountant (CA)</option>
                                <option value="Company Secretary (CS)">Company Secretary (CS)</option>
                                <option value="ICWA">ICWA</option>
                                <option value="Consultant">Consultant</option>
                                <option value="Others">Others</option>
                            </select>
                            <span className="errorMsg">
                                {errors.yourProfession?.type === 'required' && "Profession is required"}
                            </span>
                        </div>
                    </div>
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
                            <label className="text-left">Gross Annual Receipts (As Per ITR) <sup>*</sup></label>
                            <NumberFormat thousandSeparator={true}
                                thousandsGroupStyle="lakh" type="text" className="form-control" prefix={"₹ "}
                                {...register("grossAnnualReceipts", { required: true, maxLength: 14, minLength: 10, min: 100000 })} />
                            <span className="errorMsg">
                                {errors.grossAnnualReceipts?.type === 'required' && "Gross Annual Receipts is required"}
                                {errors.grossAnnualReceipts?.type === 'maxLength' && "Gross Annual Receipts must not exceed Rs. 99,99,99,999"}
                                {errors.grossAnnualReceipts?.type === 'min' && "Enter min Rs. 1,00,000"}
                                {errors.grossAnnualReceipts?.type === 'minLength' && "Enter min Rs. 1,00,000"}
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
                            <label className="text-left">Degree Registration Year <sup>*</sup></label>
                            <select className="form-control form-control-custom custom-select" {...register("degreeRegYear", { required: true })}>
                                {options.map(({ value, label }, index) => <option key={index} value={value} >{label}</option>)}
                            </select>
                            <span className="errorMsg">
                                {errors.degreeRegYear?.type === 'required' && "Degree Registration Year is required"}
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

export default SelfEmployedProfessionalForm
