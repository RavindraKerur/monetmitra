import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import blogbox from '../../../data/blog.json';
// import blogtags from '../../../data/blogtags.json';

class Content extends Component {
    render() {
        return (
            <Fragment>
                {/* Product Content Start */}
                {blogbox.filter(blog => { return blog.id === parseInt(this.props.blogId) }).map((item, i) => (
                    <section key={i} className="section-padding bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="blog-detail padding-20">
                                        <article className="post">
                                            <div className="post-wrapper">
                                                <div className="blog-img animate-img mb-xl-20">
                                                    <Link to={"/blog-single/" + item.id}>
                                                        <img src={process.env.PUBLIC_URL + "/" + item.photo} className="full-width image-fit" alt={item.title} />
                                                    </Link>
                                                </div>
                                                <div className="blog-meta">
                                                    <h2><Link to={"/blog-single/" + item.id} className="text-custom-black fw-600">{item.title}</Link></h2>
                                                    <div dangerouslySetInnerHTML={{ __html: item.longdescription }} />
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </Fragment>
        );
    }
}

export default Content;