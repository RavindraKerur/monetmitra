import React, { useState } from 'react';
import SalariedNewLoanForm from '../loanForms/SalariedNewLoanForm';
import SalariedBalTransfer from '../loanForms/SalariedBalTransfer';

function Form() {


    const [occupation, setOccupation] = useState('Salaried');
    const [natureOfLoan, setNatureOfLoan] = useState('New Loan');
    const [subOccuption, setsubOccuption] = useState("Professional");

    const onChange = (e) => {
        console.log(e.target.value);
        setOccupation(e.target.value);
    }

    const onNatOfLoanChange = (e) => {
        console.log(e.target.value);
        setNatureOfLoan(e.target.value);
    }

    const onSubOccpChange = (e) => {
        console.log(e.target.value);
        setsubOccuption(e.target.value);
    }

    return (
        <div>
            <div className="contact-form full-height align-self-center">
                <div className="div-layout-1">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="radio-box form-group">
                                <div>
                                    <p>Occupation</p>
                                    <input id="phone1" name="occup" type="radio" value="Salaried" checked={occupation === 'Salaried'} onChange={onChange}

                                    />
                                    <label htmlFor="phone1">Salaried</label>
                                    <span style={{ display: "inline-block", padding: '0 10px' }}>&nbsp;</span>
                                    <input id="phone2" name="occup" type="radio" value="Self Employed" checked={occupation === 'Self Employed'} onChange={onChange}

                                    />
                                    <label htmlFor="phone2">Self Employed</label>
                                </div>
                            </div>
                        </div>
                        {
                            occupation === "Salaried" &&
                            <div className="col-sm-6">
                                <div className="radio-box form-group">
                                    <div>
                                        <p>Nature of Loan</p>
                                        <input id="loan1" name="natOfLoan" type="radio" value="New Loan" checked={natureOfLoan === 'New Loan'} onChange={onNatOfLoanChange} />
                                        <label htmlFor="loan1">New Loan</label>
                                        <span style={{ display: "inline-block", padding: '0 10px' }}>&nbsp;</span>
                                        <input id="loan2" name="natOfLoan" type="radio" value="Balance Transfer" checked={natureOfLoan === 'Balance Transfer'} onChange={onNatOfLoanChange} />
                                        <label htmlFor="loan2">Balance Transfer</label>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            occupation === "Self Employed" &&
                            <div className="col-sm-6">
                                <div className="radio-box form-group">
                                    <div>
                                        <p>Sub Occupation</p>
                                        <input id="loan1" name="natOfLoan" type="radio" value="Professional" checked={subOccuption === 'Professional'}
                                            onChange={onSubOccpChange}
                                        />
                                        <label htmlFor="loan1">Professional</label>
                                        <span style={{ display: "inline-block", padding: '0 10px' }}>&nbsp;</span>
                                        <input id="loan2" name="natOfLoan" type="radio" value="Businessman" checked={subOccuption === 'Businessman'}
                                            onChange={onSubOccpChange}
                                        />
                                        <label htmlFor="loan2">Businessman</label>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            occupation === "Salaried" && natureOfLoan === 'New Loan' &&
                            <SalariedNewLoanForm />
                        }
                        {
                            occupation === "Salaried" && natureOfLoan === 'Balance Transfer' &&
                            <SalariedBalTransfer />
                        }
                        {
                            occupation === "Self Employed" && subOccuption === 'Professional' &&
                            <div>Three</div>
                        }
                        {
                            occupation === "Self Employed" && subOccuption === 'Businessman' &&
                            <div>Four</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
