import React, { Component, Fragment } from 'react';
// import Aboutus from './Aboutus';
import Banner from './Banner';
// import Intro from './Intro';
import Loancalculator from './Loancalculator';
// import Loanplans from './Loanplans';
import Process from './Process';
// import Services from './Services';
// import Team from './Team';
import Typeofloan from './Typeofloan';
// import Whyus from './Whyus';
// import Partners from './Partners';
// import Bookappointment from '../../layouts/Bookappointment';
import Advertisement from '../../layouts/Advertisement';
import Blog from './Blog';
import Testimonials from './Testimonials';
import Faqs from './Faqs';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                {/* <Intro/> */}
                {/* <Aboutus/> */}
                <Typeofloan/>
                <Advertisement/>
                <Loancalculator/>
                {/* <Partners/> */}
                {/* <Bookappointment/> */}
                {/* <Services/> */}
                {/* <Loanplans/> */}
                <Process/>
                {/* <Whyus/> */}
                {/* <Team/> */}
                <Blog/>
                <Testimonials/>
                <Faqs/>
            </Fragment>
        );
    }
}

export default Content;