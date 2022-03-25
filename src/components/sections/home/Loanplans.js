import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const typeofloan = [
  {
    id: 1,
    bank: "Kotak Mahindra Bank",
    type: "Home Loan",
    intrest: "6.65%",
    rating: [{ rate: 5 }]
  },
  {
    id: 2,
    bank: "Punjab Sind Bank",
    type: "Home Loan",
    intrest: "6.65%",
    rating: [{ rate: 5 }]
  },
  {
    id: 3,
    bank: "State Bank of India",
    type: "Home Loan",
    intrest: "6.70%",
    rating: [{ rate: 5 }]
  },
  {
    id: 4,
    bank: "HDFC Bank",
    type: "Personal Loan",
    intrest: "10.75 - 21.50%",
    rating: [{ rate: 5 }]
  },
  {
    id: 5,
    bank: "Indusind Bank",
    type: "Personal Loan",
    intrest: "11.00 - 16.75%",
    rating: [{ rate: 5 }]
  },
  {
    id: 6,
    bank: "HDFC Bank",
    type: "Business Loan",
    intrest: "15.65 - 21.20%",
    rating: [{ rate: 5 }]
  },
  {
    id: 7,
    bank: "IIFL",
    type: "Business Loan",
    intrest: "18 - 25%",
    rating: [{ rate: 5 }]
  }
];

class Loanplans extends Component {
  render() {
    return (
      <div className="section-padding lw-tab-section p-relative" style={{ paddingTop: '0' }}>
        <div className="container dark-red">
          <div className="section-header">
            <div className="section-heading">
              <h3 className="text-custom-black fw-700">Loan Comparison</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="lw-mega-tab">
                <div className="lw-tab-content-wrapper">
                  <div className="table-responsive">
                    <table className="lw-tab-table">
                      <tbody>
                        <tr className="lw-table-row-1">
                          <th>Bank / NBFC</th>
                          <th>Loan Type</th>
                          <th>Interest Rate</th>
                          <th>Customer Ratings</th>
                          <th>Apply</th>
                        </tr>
                        {typeofloan.map((item, i) => (
                          <tr key={i}>
                            <td className="lw-table-data-4">
                              {item.bank}
                            </td>
                            <td className="lw-table-data-4">
                              {item.type}
                            </td>
                            <td className="lw-table-data-4">
                              {item.intrest}
                            </td>
                            <td className="lw-table-data-4 company-rating">
                              <div className="ratings"> <span className="text-custom-yellow"><i className="fas fa-star" /></span>
                                <span className="text-custom-yellow"><i className="fas fa-star" /></span>
                                <span className="text-custom-yellow"><i className="fas fa-star" /></span>
                                <span className="text-custom-yellow"><i className="fas fa-star" /></span>
                                <span className="text-custom-yellow"><i className="fas fa-star" /></span>
                              </div>
                            </td>
                            <td className="lw-table-data-4 choose-btn">
                              <Link to="/finance" className="btn-first btn-submit-fill">Choose</Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loanplans;