import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from '../../../data/services.json';
// import Sidebar from '../../layouts/Servicesidebar';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';

class Serviceblock extends Component {
    constructor() {
        super();
        this.state = {
            items: serviceblock,
            currentPage: 1,
            itemsPerPage: 6,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        const renderitems = currentitems.map((item, i) => {
            return <div key={i} className="col-md-4 col-sm-6">
                <div className="main-services-box p-relative mb-xl-30">
                    <div className="main-service-wrapper padding-20">
                        <div className="icon-box">
                            <i className={item.icon} />
                        </div>
                        <h5 className="fw-700">
                            {
                                item.id === 7 ? <Link to={item.link} className="text-custom-black">{item.title}</Link> : <Link to={item.link + item.id} className="text-custom-black">{item.title}</Link>
                            }
                        </h5>
                        <p className="text-light-white no-margin">{item.shortdesc}</p>
                    </div>
                </div>
            </div>
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames("page-item", { "active": activeCondition })}>
                        <Link className="page-link" to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });
        return (
            <section className="section-padding bg-gray service-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-12">
                                <div className="row pagination-content">
                                    {this.state.loading === false ? renderitems : <Loader />}
                                    <div className="col-12">
                                        <nav className="mt-3">
                                            {pageNumbers.length > 1 ?
                                                <ul className="pagination justify-content-center">
                                                    {/* Prev */}
                                                    {/* to show previous, we need to be on the 2nd or more page */}
                                                    {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                                                <span aria-hidden="true">Previous</span>
                                                            </Link>
                                                        </li>
                                                        : ''}
                                                    {/* Prev */}
                                                    {renderPagination}
                                                    {/* Next */}
                                                    {/* to show next, we should not be on the last page */}
                                                    {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li className="page-item">
                                                        <Link className="page-link" to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                                                            <span aria-hidden="true">Next</span>
                                                        </Link>
                                                    </li>
                                                        : ''}
                                                    {/* Next */}
                                                </ul> : ''}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Serviceblock;