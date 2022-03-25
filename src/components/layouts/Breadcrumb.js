import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="sub-header p-relative">
                <div className="overlay overlay-bg-white" />
                <div className="pattern" />
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sub-header-content p-relative">
                                    <h1 className="text-custom-black lh-default fw-600">{this.props.breadcrumb.pagename}</h1>
                                    <ul className="custom">
                                        <li> <Link to="/" className="text-light-blue">Home</Link>
                                        </li>
                                        <li className="text-light-blue">{this.props.breadcrumb.pagename}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;