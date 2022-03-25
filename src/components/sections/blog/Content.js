import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import blogbox from '../../../data/blog.json';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            items: blogbox,
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
            return <article key={i} className="col-lg-4 col-md-6 post mb-xl-30">
                <div className="post-wrapper">
                    <div className="blog-img animate-img">
                        <Link to={"/blog-single/" + item.id}>
                            <img src={process.env.PUBLIC_URL + "/" + item.photo} className="full-width" alt={item.title} />
                        </Link>
                    </div>
                    <div className="blog-meta padding-20">
                        <div className="post-meta">
                            {/* <div className="author-img">
                                <img src={process.env.PUBLIC_URL + "/" + item.author.authorphoto} className="rounded-circle" alt={item.author.authorname} />
                            </div> */}
                            <div className="author-meta">
                                {/* <h6 className="no-margin"><Link to={"/blog-single/" + item.id} className="text-custom-white">{item.author.authorname}</Link></h6> */}
                                <p className="no-margin text-custom-white">{item.postdate}</p>
                            </div>
                        </div>
                        <div className="post-content">
                            <h2><Link to={"/blog-single/" + item.id} className="text-custom-black fw-600">{item.title.slice(0, 25)}..</Link></h2>
                            <p className="text-light-white">{item.shortdesc}</p>
                        </div>
                        <div className="blog-links">
                            <Link to={"/blog-single/" + item.id} className="text-light-blue fs-14">Read More</Link>
                        </div>
                    </div>
                </div>
            </article>
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
            <section className="section-padding bg-gray our-articles pagination-content">
                <div className="container">
                    <div className="row">
                        {this.state.loading === false ? renderitems : <Loader />}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <nav className="mt-5">
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
            </section>
        );
    }
}

export default Content;