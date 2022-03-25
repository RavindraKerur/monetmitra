import React from 'react'

function Faqs() {
    return (
        <div>
            <h6 className=" fw-700 text-dark">What is the difference between a credit card and a debit card?</h6>
            <p className="fs-14 mb-xl-20">A debit card is used to withdraw your own money from your bank account. Whereas, the money that you spend (purchases) or withdraw (cash advance) via a credit card is like a short term loan granted by card issuing bank.</p>
            
            <h6 className=" fw-700 text-dark">What are the different types of credit cards?</h6>
            <p className="fs-14 mb-xl-20">Credit cards are classified into two types:</p>
            <ul>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Standard credit cards</strong> – These are cards with basic features with no or nominal annual fees.</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Specialized credit cards</strong> – Specialized credit cards cater to specific needs, such cards include dining benefits, fuel cost savings, travel privileges and others.</li>
            </ul>
            
            <h6 className=" fw-700 text-dark">How does EMV chip and PIN system credit card work?</h6>
            <p className="fs-14 mb-xl-20">EMV is a short form for Europay, MasterCard and Visa. This is global standard for cards with the chip and PIN technology. The chip card and PIN code need to be used together to authenticate chip-card transactions. When an EMV card is used for payment, a unique transaction code is generated that cannot be used for another transaction. EMV technology ensures an additional level of security in transactions to prevent credit card frauds.</p>
            
            <h6 className=" fw-700 text-dark">What is the CVV number?</h6>
            <p className="fs-14 mb-xl-20">The CVV Number (Card Verification Value) it is a 3 digit unique number mentioned on the back side of the credit card. The CVV is an essential part of the verification process specifically in case of online transactions.</p>

            <h6 className=" fw-700 text-dark">What are the eligibility criteria for a Credit Card?</h6>
            <p className="fs-14 mb-xl-20">The eligibility criteria for credit cards vary from one bank to another. Following are a few generic criteria:</p>
            <ul>
                <li className="fs-14"><i className="fas fa-check" /> One should be 18 years old</li>
                <li className="fs-14"><i className="fas fa-check" /> One should be salaried or self employed (Salary proof/ acknowledge ITR required)</li>
                <li className="fs-14"><i className="fas fa-check" /> Should have at least one savings account in an Indian Bank</li>
                <li className="fs-14"><i className="fas fa-check" /> Should possess a valid Indian address</li>
                <li className="fs-14"><i className="fas fa-check" /> Should qualify the minimum income requirement set by the card issuer etc.</li>
            </ul>

            <h6 className=" fw-700 text-dark">How long does it take to apply for and receive a Credit Card?</h6>
            <p className="fs-14 mb-xl-20">A credit card can be applied online in less than 2 minutes. Once the bank receives the application form, and is complete in all respects along with all the required documents, your application will be processed within two weeks. Provided all your documents are in order, you will receive your new credit card within 7 working days, once your application is approved and all the checks have been completed by the bank.</p>

            <h6 className=" fw-700 text-dark">What is an add-on card?</h6>
            <p className="fs-14 mb-xl-20">An add-on card also known as a supplementary card is an additional credit card issued to one or more family members of the primary cardholder. Supplementary card shares the total credit limit of the primary card account and have the same features as the primary card. Any reward points earned through the add-on card(s) are credited to the primary card account.</p>

            <h6 className=" fw-700 text-dark">What needs to be done in case of loss of my credit card?</h6>
            <p className="fs-14 mb-xl-20">In case your credit card is lost, first and foremost you need to block the card and prevent unauthorized transactions.  You need to contact your card provider’s customer care and inform them of the card loss/theft so that the card is blocked and the replacement card issue procedure is started.</p>

            <h6 className=" fw-700 text-dark">What are the charges applicable for credit cards?</h6>
            <ul>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Joining fee –</strong> paid at the time of purchasing a credit card</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Annual fee –</strong> the pre-specified amount paid annually by people having credit card</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Duplicate statement fee -</strong> a fixed sum charged on getting a duplicate statement in physical form</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Late payment charge –</strong> it is a penalty to be paid over and above the interest charges if the payments are not made in a timely fashion.</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Cash withdrawal -</strong> interest is charged on withdrawal of cash against the credit card</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Service Tax -</strong> service tax is charged on the expenses made using a credit card which depends on the total value of the transaction inclusive of interest, fees and other charges</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>ECS or cheque return charge -</strong> a fixed amount is to be paid by the card in case of ECS transfer failure or cheque bounce</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Foreign currency transactions –</strong> for the transactions made overseas, a pre-defined percentage of transaction value subject to a minimum amount is to be paid to the credit card issuer</li>
                <li className="fs-14"><i className="fas fa-check" /> <strong>Over-limit fee -</strong> It is the fee charged when your purchases, finance charges or fees exceed your credit limit.</li>
            </ul>

            <h6 className=" fw-700 text-dark">What does Annual Fee refer to?</h6>
            <p className="fs-14 mb-xl-20">A yearly fee is charged by a credit card company each year for use of a credit card. This fee varies from one card to another and may be waived off by the bank in case your card agreement contains a waiver clause on achieving a specific annual expense threshold.  There are also a number of credit cards available that have zero annual fees.</p>

        </div>
    )
}

export default Faqs
