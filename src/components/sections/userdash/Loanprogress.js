import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';
import { Collapse } from 'react-bootstrap';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function chartData() {
    return {
        labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                label: "",
                borderColor: "#0070ba",
                pointBorderColor: "#0070ba",
                pointBackgroundColor: "#0070ba",
                pointHoverBackgroundColor: "#0070ba",
                pointHoverBorderColor: "#0070ba",
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 1,
                pointRadius: 0,
                fill: true,
                options: false,
                backgroundColor: "#0070ba",
                borderWidth: 0,
                data: [200, 175, 150, 125, 100, 75, 50, 25, 0]
            },
        ]
    }
}
function smallchartData() {
    return {
        labels: ["", "", "", "", "", "", "", "", "", "", ""],
        datasets: [{
            label: "",
            borderColor: "#0070ba",
            pointBorderColor: "#0070ba",
            pointBackgroundColor: "#0070ba",
            pointHoverBackgroundColor: "#0070ba",
            pointHoverBorderColor: "#0070ba",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 1,
            pointRadius: 0,
            fill: true,
            options: false,
            backgroundColor: "#0070ba",
            borderWidth: 0,
            data: [200, 175, 150, 125, 100, 75, 50, 25, 0]
        }]

    }
}
const options = {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20
            },
            gridLines: {
                drawTicks: false,
                display: false
            }

        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}
const smalloptions = {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                display: false
            }
        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                display: false
            }
        }]
    }
}

class Loanprogress extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: chartData(),
            smalldata: smallchartData(),
            open: true,
        }
    };
    render() {
        const { open } = this.state;
        return (
            <div className="col-12">
                <div className="dashboard-second-sec" onClick={() => this.setState({ open: !open })}
                    aria-controls="user-profile"
                    aria-expanded={open}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 align-self-center">
                            <div className="heading-text">
                                <h4 className="text-custom-black no-margin">LOAN PROGRESS CHARTS</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="right-side">
                                <div className="pie-chart-box">
                                    <div className="active-border activeBorder">
                                        <div className="circle circlestyle">
                                            <VisibilitySensor>
                                                {({ isVisible }) => {
                                                    const percentage = isVisible ? 78 : 0;
                                                    return (
                                                        <CircularProgressbar
                                                            value={percentage}
                                                            text={`${percentage}%`}
                                                            strokeWidth={7}
                                                            styles={buildStyles({
                                                                strokeLinecap: 'butt',
                                                                pathTransitionDuration: 0.5,
                                                                pathColor: `rgba(17, 195, 145, 1)`,
                                                                textColor: '#000000',
                                                                trailColor: '#0070ba',
                                                                backgroundColor: 'transparent',
                                                            })}
                                                        />
                                                    );
                                                }}
                                            </VisibilitySensor>
                                        </div>
                                    </div>
                                </div>
                                <div className="line-chart-box">
                                    <div className="graph">
                                        <LineChart data={this.state.smalldata} options={smalloptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Collapse in={this.state.open}>
                    <div className="dashboard-second-sec-large">
                        <div className="row">
                            <div className="col-lg-5">
                                <h5 className="text-custom-black fw-600 text-center mb-xl-40">Repayment Progress</h5>
                                <div className="left-side mb-md-40">
                                    <div className="pie-chart-area">
                                        <div className="active-border activeBorder">
                                            <div className="circle circlestyle-big">
                                                <VisibilitySensor>
                                                    {({ isVisible }) => {
                                                        const percentage = isVisible ? 78 : 0;
                                                        return (
                                                            <CircularProgressbar
                                                                value={percentage}
                                                                text={`${percentage}%`}
                                                                strokeWidth={3}
                                                                styles={buildStyles({
                                                                    strokeLinecap: 'butt',
                                                                    pathTransitionDuration: 0.5,
                                                                    pathColor: `rgba(17, 195, 145, 1)`,
                                                                    textColor: '#000000',
                                                                    trailColor: '#0070ba',
                                                                    backgroundColor: 'transparent',
                                                                })}
                                                            />
                                                        );
                                                    }}
                                                </VisibilitySensor>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pie-chart-area-text">
                                        <div className="text-wraper mb-xl-20">
                                            <label className="fw-600 fs-16 text-custom-black">$ 10,000</label>
                                            <p className="no-margin fw-500 text-custom-black">Outstanding balance</p>
                                        </div>
                                        <div className="text-wraper">
                                            <label className="fw-600 fs-16 text-custom-black">$ 1,257</label>
                                            <p className="no-margin fw-500 text-custom-black">Paid to date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <h5 className="text-custom-black fw-600 text-center mb-xl-40">Repayment Tracking</h5>
                                <div className="right-side">
                                    <div className="graph mb-xs-40">
                                        <LineChart data={this.state.data} options={options} />
                                    </div>
                                    <div className="graph-text">
                                        <div className="text-wraper mb-xl-20">
                                            <label className="fw-600 fs-16 text-custom-black">Average Payment</label>
                                            <p className="no-margin fw-500 text-custom-black">$ 57,975</p>
                                        </div>
                                        <div className="text-wraper">
                                            <label className="fw-600 fs-16 text-custom-black">Estimated time to repay</label>
                                            <p className="no-margin fw-500 text-custom-black">1 month(s)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default Loanprogress;