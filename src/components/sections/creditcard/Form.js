import React from 'react'

function Form() {
    return (
        <div>
            <div className="contact-form full-height align-self-center">
                <form className="form-layout-1">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="text-left">First Name</label>
                                <input type="text" name="#" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="text-left">Last Name</label>
                                <input type="text" name="#" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="text-left">Loan Amount</label>
                                <input type="text" name="#" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="text-left">Company</label>
                                <input type="text" name="#" className="form-control" />
                            </div>
                        </div>
                        <p></p>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn-first btn-submit-red-dark btn-submit text-custom-white">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
