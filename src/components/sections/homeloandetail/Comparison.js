import React from 'react';
import { Accordion, Card, NavLink } from 'react-bootstrap';
import { Tab, Nav } from "react-bootstrap";
import comparisionData from '../../../data/homeComparision.json';

function Comparison() {
    return (
        <div className="table-responsive">
            <table className="lw-tab-table loan-table">
                <tbody>
                    <tr className="lw-table-row-1">
                        <th width="20%">Bank/NBFC</th>
                        <th width="20%">Intrest Rate Range</th>
                        <th width="20%">Processing Fee</th>
                        <th width="20%">Min. Loan Amount</th>
                        <th width="20%">Min. Tenure</th>
                    </tr>
                    <tr>
                        <td colSpan="5" style={{ padding: '0' }}>
                            <Accordion style={{ whiteSpace: "break-spaces" }}>
                                {comparisionData.map((item, i) => (
                                    <div key={i} className="load-data">
                                        <table className="lw-tab-table loan-table">
                                            <tbody>
                                                <tr style={{ borderBottomWidth: '0' }}>
                                                    <td width="20%">
                                                        <p>{item.bankName}</p>
                                                        {
                                                            Array.apply(null, { length: item.rating }).map((e, i) => (
                                                                <span className="text-custom-yellow" key={i}><i className="fas fa-star"></i></span>
                                                            ))
                                                        }
                                                        <p className="sub fs-12">
                                                            {
                                                                item.rating ? <span>{item.rating}.0 / {item.totalRating}.0 </span> : ''
                                                            }
                                                            {
                                                                item.totalusers ? <span className="text-dark-red">{item.totalusers} users</span> : ''
                                                            }
                                                        </p>
                                                    </td>
                                                    <td width="20%">
                                                        <p>{item.intrestRateRange}</p>
                                                        <span className="sub fs-12">{item.intrestRateRangeFixed}</span>
                                                    </td>
                                                    <td width="20%" style={{fontFamily: 'sans-serif'}}>
                                                        <p>{item.processingFee}</p>
                                                        <span className="sub fs-12">{item.processingFeeTime}</span>
                                                    </td>
                                                    <td width="20%" style={{fontFamily: 'sans-serif'}}>{item.loanAmount}</td>
                                                    <td width="20%">{item.tenureRange}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Card key={item.id}>
                                            <Accordion.Collapse eventKey={item.id}>
                                                <Card.Body>
                                                    <Tab.Container defaultActiveKey="tab1">
                                                        <Nav variant="tabs" className="lw-nav-tabs">
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="tab1">Features</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="tab2">Reviews</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                        <Tab.Content className="loan-explore">
                                                            <Tab.Pane eventKey="tab1">
                                                                <div className="row">
                                                                    {item.features.map((c, j) =>
                                                                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-4 col-0" key={j}>
                                                                            <div className="featureName">
                                                                                <div className="heading">
                                                                                    {c.heading}
                                                                                </div>
                                                                                <div className="pros">
                                                                                    <ul>
                                                                                        {
                                                                                            c.listData && c.listData.length ? c.listData.map((kk, jj) => {
                                                                                                return <li key={jj}>{kk.list}</li>
                                                                                            }) : ''
                                                                                        }
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="tab2">
                                                                {
                                                                    item.reviewsData && item.reviewsData.length ? <>
                                                                        {item.reviewsData.map((review, t) =>
                                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 col-0" key={t}>
                                                                                <div className="featureName">
                                                                                    <div className="heading">
                                                                                        {review.heading}
                                                                                    </div>
                                                                                    <div className="pros">
                                                                                        <ul>
                                                                                            {
                                                                                                review.listData && review.listData.length ? review.listData.map((reviewList, l) => {
                                                                                                    return <li key={l}>
                                                                                                        <span className="title">{reviewList.listTitle} - <span className="userName">{reviewList.listUser}</span></span>
                                                                                                        <span className="content">{reviewList.listContent}</span>
                                                                                                    </li>
                                                                                                }) : ''
                                                                                            }
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </> : <div style={{textAlign: 'center', padding: '15px 0'}}>NA</div>
                                                                }
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                    </Tab.Container>

                                                </Card.Body>
                                            </Accordion.Collapse>
                                            <Card.Header>
                                                <Accordion.Toggle as={NavLink} variant="link" eventKey={item.id}>
                                                    Explore
                                                </Accordion.Toggle>
                                            </Card.Header>
                                        </Card>
                                    </div>
                                ))}
                            </Accordion>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Comparison
