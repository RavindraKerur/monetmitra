import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import intropost from '../../../data/intro.json';

class Intro extends Component {
    render() {
        return (
            <section className="genmed-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        {intropost.map((item, i) => (
                            <div key={i} className="col-lg-3 col-sm-6">
                                <div className={"intro-box bg-dark-brown " + item.resClass}>
                                    <div className="intro-wrapper text-center"> <i className="flaticon-flag" />
                                        <h6 className="text-custom-white fw-700">{item.title}</h6>
                                        <p className="text-custom-white">{item.text}</p> <Link to="/service" className="btn-first btn-submit fw-600">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;