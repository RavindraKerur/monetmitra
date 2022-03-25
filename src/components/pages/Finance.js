import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/finance/Content';

const pagelocation = 'Finance';

class Finance extends Component {
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
                <div className="overlapsec"/>
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content/>
                <Footer />
            </Fragment>
        );
    }
}

export default Finance;