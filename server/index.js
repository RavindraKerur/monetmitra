const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io", //replace with your email provider
    port: 2525,
    auth: {
        // user: process.env.EMAIL,
        // pass: process.env.PASSWORD
        user: "2339acca5fd893", // generated ethereal user
        pass: "9a16fee07f393d", // generated ethereal password
    }
});

// verify connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
})

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors({
    origin: '*'
}));

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, '')));

app.post('/salariedAndNewLoan', (req, res, next) => {
    const obj = JSON.stringify(req.body);
    const data = JSON.parse(obj);
    const email = "ravindra@gmail.com"
    const subject = "Salaried and New Loan Form"
    const message = `<div>
        <p>Full Name (As per PAN Card)  - ${data.fullName}</p>
        <p>Mobile Number - ${data.mobileNo}</p>
        <p>Net Monthly Income - ${data.netMonthlyIncome}</p>
        <p>Place of Current Residence or Pincode - ${data.curResiPincode}</p>
        <p>Loan Amount Needed - ${data.loanAmtNeeded}</p>
        <p>Choose Your Employer type - ${data.employerType}</p>
        <p>Terms and Conditions - ${data.tAndC}</p>
        </div>
    `
    const mail = {
        from: email,
        to: "to@email.com",
        subject: subject,
        // text: message,
        html: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

app.post('/salariedAndBalanceTransfer', (req, res, next) => {
    const obj = JSON.stringify(req.body);
    const data = JSON.parse(obj);
    const email = "ravindra@gmail.com"
    const subject = "Salaried and Balance Transfer Form"
    const message = `<div>
        <p>Full Name (As per PAN Card)  - ${data.fullName}</p>
        <p>Mobile Number - ${data.mobileNo}</p>
        <p>Net Monthly Income - ${data.netMonthlyIncome}</p>
        <p>Place of Current Residence or Pincode - ${data.curResiPincode}</p>
        <p>Choose Your Employer type - ${data.employerType}</p>
        <p>Existing Loan Form - ${data.employerType}</p>
        <p>Current Loan Outstanding - ${data.currentLoanOutstanding}</p>
        <p>Current Interest Rate on Loan - ${data.currentInterestRate}</p>
        <p>Do you currently pay any EMI? - ${data.currentlyEMI}</p>
        <p>Total EMI Amount - ${data.totalEMIAmount}</p>
        <p>Terms and Conditions - ${data.tAndC}</p>
        </div>
    `
    const mail = {
        from: email,
        to: "to@email.com",
        subject: subject,
        // text: message,
        html: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

app.post('/selfEmployedAndProfessional', (req, res, next) => {
    const obj = JSON.stringify(req.body);
    const data = JSON.parse(obj);
    const email = "ravindra@gmail.com"
    const subject = "Self Employed and Professional Form"
    const message = `<div>
        <p>Select Your Profession  - ${data.yourProfession}</p>
        <p>Full Name (As per PAN Card) - ${data.fullName}</p>
        <p>Mobile Number - ${data.mobileNo}</p>
        <p>Gross Annual Receipts (As Per ITR) - ${data.grossAnnualReceipts}</p>
        <p>Place of Current Residence or Pincode - ${data.curResiPincode}</p>
        <p>Loan Amount Needed - ${data.loanAmtNeeded}</p>
        <p>No. of Years of ITR Available - ${data.noYearsOfITR}</p>
        <p>Degree Registration Year - ${data.degreeRegYear}</p>
        <p>Terms and Conditions - ${data.tAndC}</p>
        </div>
    `
    const mail = {
        from: email,
        to: "to@email.com",
        subject: subject,
        // text: message,
        html: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

app.post('/selfEmployedAndBusinessman', (req, res, next) => {
    const obj = JSON.stringify(req.body);
    const data = JSON.parse(obj);
    const email = "ravindra@gmail.com"
    const subject = "Self Employed and Businessman Form"
    const message = `<div>
        <p>Full Name (As per PAN Card)  - ${data.fullName}</p>
        <p>Mobile Number  - ${data.mobileNo}</p>
        <p>Place of Current Residence or Pincode - ${data.curResiPincode}</p>
        <p>Loan Amount Needed - ${data.loanAmtNeeded}</p>
        <p>Type Of Incorporation - ${data.typeOfIncorporation}</p>
        <p>Type Of Business - ${data.typeOfBusiness}</p>
        <p>No. of Years of ITR Available - ${data.noYearsOfITR}</p>
        <p>Annual Turnover - ${data.annualTurnover}</p>
        <p>Years in Business - ${data.yearsInBusiness}</p>
        <p>Do you File GST Return? - ${data.fileGSTReturn}</p>
        <p>Date of Birth - ${data.dob}</p>
        <p>Terms and Conditions - ${data.tAndC}</p>
        </div>
    `
    const mail = {
        from: email,
        to: "to@email.com",
        subject: subject,
        // text: message,
        html: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})


app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

// npm run dev