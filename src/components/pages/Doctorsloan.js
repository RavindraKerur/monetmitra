import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/doctorsloandetail/Content';

const pagelocation = 'Loan for Doctors';

class Doctorsloan extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Money Mithra | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content serviceId={this.props.match.params.id}/>
                <Footer />
            </Fragment>
        );
    }
}

export default Doctorsloan;