import React, { Component } from 'react';
import processbox from '../../../data/process.json'

class Process extends Component {
    render() {
        return (
            <section className="section-padding exp-cal parallax ln-process">
                <div className="overlay overlay-bg-black" />
                <div className="container dark-red white-line">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-white fw-700">Our Process</h3>
                        </div>
                    </div>
                    <div className="row">
                        {processbox.map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="exp-cal-img mb-md-30">
                                    {/* <img src={process.env.PUBLIC_URL + item.icon} className="mb-xl-20" alt={item.title} /> */}
                                    <i className={item.icon}></i>
                                    <h4 className="text-custom-white fw-600">{item.title}</h4>
                                    <p className="text-custom-white">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Process;