import React from 'react'

const loanData = [
    {
        id: 1,
        bankName: 'HDFC Bank',
        intrestRateRange: '10.75% - 21.50%',
        processingFee: 'Up to 2.50%',
        loanAmount: 'Up to Rs.40L',
        tenureRange: '1 - 5 Years'
    },
    {
        id: 2,
        bankName: 'IndusInd Bank',
        intrestRateRange: '11.00% - 16.75%',
        processingFee: 'Up to 3.50%',
        loanAmount: 'Up to Rs.5L',
        tenureRange: 'Up to 5 Years'
    },
    {
        id: 3,
        bankName: 'MyShubhLife',
        intrestRateRange: '25.00% - 32.00%',
        processingFee: '3.00%',
        loanAmount: 'Rs.75K - Rs.5L',
        tenureRange: '1 - 4 Years'
    },
    {
        id: 4,
        bankName: 'Tata Capital',
        intrestRateRange: '11.25% - 14.49%',
        processingFee: 'Up to 2.75%',
        loanAmount: 'Up to Rs.20L',
        tenureRange: '1 - 6 Years'
    },
    {
        id: 5,
        bankName: 'PaySense',
        intrestRateRange: '18.00% - 36.00%',
        processingFee: '2.00% - 3.00%',
        loanAmount: 'Rs.1L - Rs.5L',
        tenureRange: 'Up to 5 Years'
    },
    {
        id: 6,
        bankName: 'Fullerton',
        intrestRateRange: '11.99% - 25.00%',
        processingFee: '3.00% - 6.00%',
        loanAmount: 'Up to Rs.25L',
        tenureRange: '1 - 5 Years'
    },
    {
        id: 7,
        bankName: 'HOME CREDIT',
        intrestRateRange: '13.00% - 30.00%',
        processingFee: '3.00% - 6.00%',
        loanAmount: 'Rs.50K - Rs.2L',
        tenureRange: 'Up to 4 Years'
    }
]

function Comparison() {
    return (
        <div className="table-responsive">
            <table className="lw-tab-table loan-table">
                <tbody>
                    <tr className="lw-table-row-1">
                        <th>Bank Name</th>
                        <th>Intrest Rate Range</th>
                        <th>Processing Fee Range</th>
                        <th>Loan Amount</th>
                        <th>Tenure Range</th>
                    </tr>

                    {loanData.map((item, i) => (
                        <tr key={i}>
                            <td>{item.bankName}</td>
                            <td>{item.intrestRateRange}</td>
                            <td>{item.processingFee}</td>
                            <td>{item.loanAmount}</td>
                            <td>{item.tenureRange}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Comparison
