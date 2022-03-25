import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogbox from '../../data/blog.json';
import blogcategory from '../../data/blogcategory.json';

class Blogsidebar extends Component {
    render() {
        return (
            <div className="sidebar_wrap">
                <div className="sidebar">
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title bg-light-blue">
                            <h5 className="no-margin text-custom-white fw-600">Search</h5>
                        </div>
                        <form>
                            <div className="form-group mb-0">
                                <div className="search p-relative">
                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="Title or keywords" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title bg-light-blue">
                            <h5 className="no-margin text-custom-white fw-600">Categories</h5>
                        </div>
                        <ul className="categories custom">
                            <li> <Link to="#" className="text-custom-black fs-14">All <span className="text-light-white">({blogcategory.length})</span></Link>
                            </li>
                            {blogcategory.map((item, i) => (
                                <li key={i}> <Link to="#" className="text-custom-black fs-14">{item.title} <span className="text-light-white">({item.count})</span></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title bg-light-blue">
                            <h5 className="no-margin text-custom-white fw-600">Popular Post</h5>
                        </div>
                        <ul className="custom popular_post">
                            {blogbox.slice(0, 3).map((item, i) => (
                                <li key={i}>
                                    <div className="post">
                                        <div className="post-wrapper">
                                            <div className="popular_post_img animate-img">
                                                <Link to={"/blog-single/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.photo} className="full-width image-fit" alt={item.title} />
                                                </Link>
                                            </div>
                                            <div className="popular_post_title">
                                                <div className="post-date">
                                                    <p className="text-light-blue no-margin">{item.postdate}</p>
                                                </div>
                                                <h6><Link to={"/blog-single/" + item.id} className="text-custom-black fs-16 fw-600">{item.title}</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title bg-light-blue">
                            <h5 className="no-margin text-custom-white fw-600">Opening Hours</h5>
                        </div>
                        <table className="table text-custom-black">
                            <tbody>
                                <tr>
                                    <td>Mon – Wed</td>
                                    <td>-</td>
                                    <td className="text-right">9:00 AM - 7:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>-</td>
                                    <td className="text-right">9:00 AM - 6:30 PM</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>-</td>
                                    <td className="text-right">9:00 AM - 6:00 PM</td>
                                </tr>
                                <tr className="last-tr">
                                    <td>Sun - Sun</td>
                                    <td>-</td>
                                    <td className="text-right">CLOSED</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sidebar_widgets mb-xl-30">
                        <div className="widget_title bg-light-blue">
                            <h5 className="no-margin text-custom-white fw-600">Recent Post</h5>
                        </div>
                        <ul className="custom popular_post">
                            {blogbox.slice(0, 2).map((item, i) => (
                                <li key={i}>
                                    <div className="post">
                                        <div className="post-wrapper">
                                            <div className="popular_post_img animate-img">
                                                <Link to={"/blog-single/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.photo} className="full-width image-fit" alt={item.title} />
                                                </Link>
                                            </div>
                                            <div className="popular_post_title">
                                                <div className="post-date">
                                                    <p className="text-light-blue no-margin">{item.postdate}</p>
                                                </div>
                                                <h6><Link to={"/blog-single/" + item.id} className="text-custom-black fs-16 fw-600">{item.title}</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogsidebar;