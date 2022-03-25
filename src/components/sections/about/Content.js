import React, { Component, Fragment } from 'react';
// import Advertisement from '../../layouts/Advertisement';
import Aboutus from './Aboutus';
import History from './History';
// import Journey from './Journey';
// import Team from './Team';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Aboutus/>
                <History/>
                {/* <Journey/> */}
                {/* <Advertisement /> */}
                {/* <Team /> */}
            </Fragment>
        );
    }
}

export default Content;