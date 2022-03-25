import React from 'react';
import { useForm } from "react-hook-form";
import { Tab, Nav } from "react-bootstrap";

function Content() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="section-padding bg-gray service-page">
            <div className="container dark-red">
                <div className="row">
                    <div className="col-lg-12">
                        <Tab.Container defaultActiveKey="tab1">
                            <Nav variant="tabs" className="lw-nav-tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="tab1">Apply for Partner Program</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab2">Business Associate Program</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="lw-tab-content-wrapper">
                                <Tab.Pane eventKey="tab1" className="container dark-red">
                                    <div className="contact-form full-height align-self-center bx-wrapper bg-custom-white">
                                        <div className="section-header" style={{ padding: '50px 30px 0 50px' }}>
                                            <div className="section-heading">
                                                <h3 className="fw-700 text-dark text-uppercase">Partner Program</h3>
                                            </div>
                                            <br />
                                            <h4 className="text-custom-black fw-600">Personal Details</h4>
                                        </div>
                                        <form className="form-layout-1" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">First Name <sup>*</sup></label>
                                                        <input type="text" className="form-control" {...register("firstName", { required: true, maxLength: 40, pattern: /^[A-Za-z]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.firstName?.type === 'required' && "First name is required"}
                                                            {errors.firstName?.type === 'maxLength' && "First name must be 40 character length"}
                                                            {errors.firstName?.type === 'pattern' && "Only character are allowed"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Middle Name <sup>*</sup></label>
                                                        <input type="text" className="form-control" {...register("middleName", { required: true, maxLength: 40, pattern: /^[A-Za-z]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.middleName?.type === 'required' && "Middle name is required"}
                                                            {errors.middleName?.type === 'maxLength' && "Middle name must be 40 character length"}
                                                            {errors.middleName?.type === 'pattern' && "Only character are allowed"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Last Name <sup>*</sup></label>
                                                        <input type="text" className="form-control" {...register("lastName", { required: true, maxLength: 40, pattern: /^[A-Za-z]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.lastName?.type === 'required' && "Last name is required"}
                                                            {errors.lastName?.type === 'maxLength' && "Last name must be 40 character length"}
                                                            {errors.lastName?.type === 'pattern' && "Only character are allowed"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Gender <sup>*</sup></label>
                                                        <select className="custom-select form-control form-control-custom" {...register("gender", { required: true })}>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                        </select>
                                                        <span className="errorMsg">
                                                            {errors.gender?.type === 'required' && "Gender is required"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Age <sup>*</sup></label>
                                                        <input type="text" className="form-control" {...register("age", { required: true, pattern: /^[0-9]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.age?.type === 'required' && "Age is required"}
                                                            {errors.age?.type === 'pattern' && "Age must be in numbers"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Nationality <sup>*</sup></label>
                                                        <input type="text" className="form-control" {...register("nationality", { required: true, pattern: /^[A-Za-z]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.nationality?.type === 'required' && "Nationality is required"}
                                                            {errors.nationality?.type === 'pattern' && "Only character are allowed"}
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
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Marital Status</label>
                                                        <select className="custom-select form-control form-control-custom" {...register("maritalStatus", {})}>
                                                            <option>Single</option>
                                                            <option>Married</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Blood Group</label>
                                                        <input type="text" className="form-control" {...register("bloodGroup", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">PAN <sup>*</sup></label>
                                                        <input type="text" name="#" className="form-control" {...register("pan", { required: true, pattern: /^[A-Za-z0-9]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.pan?.type === 'required' && "PAN is required"}
                                                            {errors.pan?.type === 'pattern' && "Only characters and numbers are allowed"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Aadhar# <sup>*</sup></label>
                                                        <input type="text" className="form-control" {...register("aadharNo", { required: true, pattern: /^[A-Za-z0-9]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.aadharNo?.type === 'required' && "Aadhar number is required"}
                                                            {errors.aadharNo?.type === 'pattern' && "Only characters and numbers are allowed"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Present Address</label>
                                                        <input type="text" className="form-control" {...register("presentAddress", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">City</label>
                                                        <input type="text" className="form-control" {...register("city", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">State</label>
                                                        <input type="text" className="form-control" {...register("state", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Pin Code</label>
                                                        <input type="text" className="form-control" {...register("pinCode", { pattern: /^[0-9]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.pinCode?.type === 'pattern' && "Only numbers are allowed"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Mobile Number</label>
                                                        <input type="text" className="form-control" {...register("mobileNumber", { required: true, pattern: /^[0-9]+$/i })} />
                                                        <span className="errorMsg">
                                                            {errors.mobileNumber?.type === 'required' && "Mobile number is required"}
                                                            {errors.mobileNumber?.type === 'pattern' && "Only numbers are allowed"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Alternate Number</label>
                                                        <input type="text" className="form-control" {...register("alternateNumber", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Email</label>
                                                        <input type="text" className="form-control" {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                                                        <span className="errorMsg">
                                                            {errors.email?.type === 'required' && "Email is required"}
                                                            {errors.email?.type === 'pattern' && "Email must be valid email ID"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Emergency Contact Number</label>
                                                        <input type="text" className="form-control" {...register("emgyContNumber", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Contact Person's Name</label>
                                                        <input type="text" className="form-control" {...register("contPersonsNumber", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Relationship with applicant</label>
                                                        <select className="custom-select form-control form-control-custom" {...register("relWithApplicant", {})}>
                                                            <option>Father</option>
                                                            <option>Mother</option>
                                                            <option>Spouse</option>
                                                            <option>Guardian</option>
                                                            <option>Grandparent</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="section-header" style={{ padding: '50px 30px 0 50px' }}>
                                                    <h4 className="text-custom-black fw-600">Business Details</h4>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Number of years in Business / Employment</label>
                                                        <input type="text" className="form-control" {...register("numOfYearsInBusiness", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Operating locations</label>
                                                        <input type="text" className="form-control" {...register("operatingLocations", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Additional details about business (If any)</label>
                                                        <input type="text" className="form-control" {...register("adlDetAboutBusiness", {})} />
                                                    </div>
                                                </div>

                                                <div className="section-header" style={{ padding: '50px 30px 0 50px' }}>
                                                    <h4 className="text-custom-black fw-600">Reference Details</h4>
                                                    <p>Please provide the details of two references (not related and not employed in HGS) who are known to you</p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Name</label>
                                                        <input type="text" className="form-control" {...register("refName", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Company</label>
                                                        <input type="text" className="form-control" {...register("refCompany", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Designation</label>
                                                        <input type="text" className="form-control" {...register("refDesignation", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">How is this person known to you?</label>
                                                        <input type="text" className="form-control" {...register("refPersonKnownToYou", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Contact Number</label>
                                                        <input type="text" className="form-control" {...register("refContactNumber", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="text-left">Email Id</label>
                                                        <input type="text" className="form-control" {...register("refEmailId", {})} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="custom-checkbox text-custom-black">
                                                            <input type="checkbox" {...register("tAndC", { required: true })} />
                                                            <span className="checkmark" />
                                                            <span className="checkmark-info">I hereby state that all the representations made herein are true to the best of my knowledge, information and belief and that I have not misrepresented any facts herein, and also understand that the company hereby reserves it’s rights to take such action against me for any misrepresentations as it may deem it and is allowed under applicable law, including using this application and the details stated therein by me as a deemed sworn affidavit.</span>
                                                            <span className="errorMsg checkmark-info">
                                                                {errors.tAndC?.type === 'required' && "Please agree to the terms and conditions"}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="btn-dark-red">
                                                        <button type="submit" className="btn-first btn-submit text-light-blue mt-30 mb-30">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab2" className="container dark-red">
                                    <div className="loan-tab-content">
                                        <p className="fs-14 mb-xl-20">Moneymithra is one of the leading Financial Solutions Organization associated with all the major Banks and NBFCs. After successfully embarking into Financial Services across Karnataka, now wishes to spread its wings PAN India. Moneymithra has always believed in taking its team along its growth journey and take as many under its umbrella in this success path. With this concept, Moneymithra is now introducing its Business Associate Program. In this program finance experts join us a ‘Business Associate’ or as a DSA (Direct Selling Agent).</p>

                                        <p className="fs-14 mb-xl-20">The objectives of this Business Associate Program are:</p>
                                        <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '10px' }}>
                                            <ul>
                                                <li className="fs-14"><i className="fas fa-check" /> Having Moneymithra’s footprint PAN India.</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Increase the Volume of business, thereby ensuring increased benefits for its Business Associates</li>
                                                <li className="fs-14"><i className="fas fa-check" /> And have a consistent cash flow with limited investment on infrastructure and resources for both the organization and its Business Associates.</li>
                                            </ul>
                                        </div>

                                        <h6 className="fw-700 mt-30 text-dark">Who is a Business Associate or a DSA?</h6>
                                        <p className="fs-14 mb-xl-20">A Business Associate or a DSA is a vital part in the growth of Moneymithra. A Business Associate is a channel partner with Moneymithra who can develop an understanding of the products Moneymithra offers and convey the loan leads to Moneymithra and can earn benefits over the leads. The more leads a Business Associate provides, the more profit he/she earns.</p>

                                        <p className="fs-14 mb-xl-20">Who can be a Business Associate with Moneymithra:</p>
                                        <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '0px' }}>
                                            <ul>
                                                <li className="fs-14"><i className="fas fa-check" /> An existing DSA</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Current or Ex- Bank Employee</li>
                                                <li className="fs-14"><i className="fas fa-check" /> All finance industry professionals</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Charted Accountants</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Auditor</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Loan and Insurance Agents</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Real Estate Agents</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Used Car Dealers</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Tax Consultants and Tax Auditors</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Network marketing agencies/agents</li>
                                                <li className="fs-14"><i className="fas fa-check" /> HR Professionals</li>
                                            </ul>
                                        </div>

                                        <h6 className="fw-700 mt-30 text-dark">Eligibility to be a Business Associate</h6>
                                        <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '0px' }}>
                                            <ul>
                                                <li className="fs-14"><i className="fas fa-check" /> You need to be an Indian Citizen between the age of 18 to 65.</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Has basic knowledge of financial products and services</li>
                                                <li className="fs-14"><i className="fas fa-check" /> 0 to 1 year experience in Financial Industry</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Anyone interested and passionate to start own DSA</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Having own digital space/website/network etc</li>
                                            </ul>
                                        </div>

                                        <h6 className="fw-700 mt-30 text-dark">Benefits of becoming a Business Associate with Moneymithra</h6>
                                        <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '0px' }}>
                                            <ul>
                                                <li className="fs-14"><i className="fas fa-check" /> Unlimited earning potential & Consistent revenue stream</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Lucrative slab wise incentives</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Zero Investment on Infrastructure</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Training for all its products and services on a continuing basis</li>
                                                <li className="fs-14"><i className="fas fa-check" /> "Be your own Boss" with zero capital investment</li>
                                                <li className="fs-14"><i className="fas fa-check" /> An opportunity for unrestricted career growth.</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Customize your business according to your area of expertise.</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Personalised Branding, digital & offline marketing support</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Advantages of Moneymithra brand</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Earn Best Business Payout in terms of commissions. </li>
                                                <li className="fs-14"><i className="fas fa-check" /> Pursue your job or business. And be an Associate</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Lucrative payouts. And get incentives too.</li>
                                                <li className="fs-14"><i className="fas fa-check" /> You earn additional income.</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Get professional assistance from a team in Sales & Marketing </li>
                                                <li className="fs-14"><i className="fas fa-check" /> Recognition as a channel partner of a company providing loans nation-wide</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Get access to a wide range of loan products</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Opportunity to establish new contacts that can be a source of income for lifetime.</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Become a part of a promising and high-potential finance products industry.</li>
                                            </ul>
                                        </div>

                                        <h6 className="fw-700 mt-30 text-dark">What should you do to become a Business Associate?</h6>
                                        <div className="loan-tab-content" style={{ paddingTop: 0, paddingBottom: '0px' }}>
                                            <ul>
                                                <li className="fs-14"><i className="fas fa-check" /> Send your application and be chosen as a Business Associate</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Complete your KYC and submit KYC documents</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Get Product and Process Training</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Complete Business Associate agreement and get a code generated</li>
                                                <li className="fs-14"><i className="fas fa-check" /> Start generating leads and get payouts</li>
                                            </ul>
                                        </div>

                                        <h6 className="fw-700 mt-30 text-dark">Why choose Moneymithra?</h6>
                                        <p className="fs-14 mb-xl-20">Moneymithra is one of the biggest and fastest growing financial services company in Karnataka, spreading its wings rapidly in South India and gradually PAN India. The leadership and team comprises of Industry veterans with extensive experience in finance offering solutions to all types of financial needs. Being a Business Associate with us will give you a chance to earn recognition and experience of working with an organized and reputed company. Our association with all major banks and institutions will ensure you a higher exposure and a chance to earn more.</p>

                                        <h6 className="fw-700 mt-30 text-dark">Moneymithra’s Support exclusively for Business Associates:</h6>
                                        <p className="fs-14 mb-xl-20"><strong>Sales Support:</strong></p>
                                        <ul>
                                            <li className="fs-14"><i className="fas fa-check" /> Dedicated relationship manager</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Activity Planning and Target Setting</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Various contests and rewards program</li>
                                        </ul>

                                        <p className="fs-14 mb-xl-20"><strong>Marketing Support:</strong></p>
                                        <ul>
                                            <li className="fs-14"><i className="fas fa-check" /> Quality Promotional Material</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Personalized Item</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Doorstep delivery</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Exclusive Startup Sales kit</li>
                                        </ul>

                                        <p className="fs-14 mb-xl-20"><strong>Technology Solution:</strong></p>
                                        <ul>
                                            <li className="fs-14"><i className="fas fa-check" /> Associates Desk</li>
                                            <li className="fs-14"><i className="fas fa-check" /> CRM Desk</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Client Desk</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Financial Planning Desk</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Mobile Apps</li>
                                        </ul>

                                        <h6 className="fw-700 mt-30 text-dark">Products Moneymithra offers:</h6>
                                        <p className="fs-14 mb-xl-20">Bunch of Financial Services to Cherry-pick from:</p>
                                        <ul>
                                            <li className="fs-14"><i className="fas fa-check" /> Loans: Home Loans, Personal Loans, Mortgage Loans, Doctor Loans, Vehicle Loans and Business Loans.</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Insurance: Life Insurance, General Insurance, Health Insurance</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Investments: Fixed Deposits, Realtors, Bond Investments, Recurring Deposit, Chit Funding, Mutual Funds</li>
                                        </ul>
                                        <p className="fs-14 mb-xl-20">Make your choice of becoming a Business Associate with Moneymithra today to reap the following results:</p>
                                        <ul>
                                            <li className="fs-14"><i className="fas fa-check" /> Ample Opportunities</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Enriching experiences with people</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Build your career</li>
                                            <li className="fs-14"><i className="fas fa-check" /> Financial growth</li>
                                        </ul>

                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>





                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content
