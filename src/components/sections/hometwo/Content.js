import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Intro from '../home/Intro';
import Aboutus from '../home/Aboutus';
import Services from '../home/Services';
import Loancalculator from '../home/Loancalculator';
import Loanplans from '../home/Loanplans';
import Testimonials from '../home/Testimonials';
import Faqs from '../home/Faqs';
import Advertisement from '../../layouts/Advertisement';
import Bookappointment from '../../layouts/Bookappointment';
import Team from './Team';
import Downloadapp from './Downloadapp';
import Blog from './Blog';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Intro/>
                <Aboutus/>
                <Services/>
                <Loancalculator/>
                <Loanplans/>
                <Advertisement/>
                <Team/>
                <Downloadapp/>
                <Blog/>
                <Bookappointment/>
                <Testimonials/>
                <Faqs/>
            </Fragment>
        );
    }
}

export default Content;