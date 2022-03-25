import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import navigationmenu from '../../data/navigation.json';
import HeaderComponent from '../../helper/Navigationhelper';

class Header extends HeaderComponent {
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        return (
            <header className="header-style-1">
                {/* Start Topbar */}
                <div className="topbar-style-1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="left-side">
                                    {/* <div className="language-box">
                                        <div className="language p-relative">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/flag.png"} alt="flag" />
                                            <select>
                                                <option>English</option>
                                                <option>German</option>
                                                <option>Japanese</option>
                                            </select>
                                        </div>
                                    </div> */}
                                    {/* <p className="text-custom-white no-margin">9000 Regency Parkway, Suite 400 Cary</p> */}
                                    <div className="text-custom-white" style={{ fontSize: "14px", padding: "12px 0" }}>
                                        <a href="+91 844 844 3358" className="text-decoration-none">
                                            <svg style={{ color: "#fff" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                            </svg>
                                        </a> <span>+91 844 844 3358</span><span> | <a href="mailto: support@moneymithra.com" className="text-custom-white">support@moneymithra.com</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="right-side">
                                    <ul className="custom">
                                        <li><a href="https://www.facebook.com/MoneyMithra" target="_blank" rel="noreferrer" className="text-custom-white fs-14"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li><a href="https://www.instagram.com/moneymithr/" target="_blank" rel="noreferrer" className="text-custom-white fs-14"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li><a href="https://www.linkedin.com/in/money-mithra-344b11215/" target="_blank" rel="noreferrer" className="text-custom-white fs-14"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li><a href="https://twitter.com/moneymithra" target="_blank" rel="noreferrer" className="text-custom-white fs-14"><i className="fab fa-linkedin" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Topbar */}
                {/* Start Navigation */}
                <div className={`main-navigation-style-1 ${stickyheader}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="navigation">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} className="img-fluid image-fit" alt="logo" />
                                        </Link>
                                    </div>
                                    <div className={classNames("main-menu", { "active": this.state.navmethod })}>
                                        <div className="mobile-logo">
                                            <Link to="/">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} className="img-fluid image-fit" alt="logo" />
                                            </Link>
                                        </div>
                                        <nav>
                                            <ul className="custom">
                                                {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                        {item.child ? <Link className="text-custom-black" onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link} className="text-custom-black"> {item.linkText} </Link>}
                                                        {item.child ?
                                                            <ul className="custom sub-menu" role="menu">
                                                                {item.submenu.map((sub_item, i) => (
                                                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                        {sub_item.child ? <Link className="text-custom-black" onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link className="text-custom-black" to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                        {sub_item.submenu ?
                                                                            <ul className="custom sub-menu">
                                                                                {sub_item.submenu.map((third_item, i) => (
                                                                                    <li className="menu-item" key={i}><Link className="text-custom-black"
                                                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul> : null}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            : null
                                                        }
                                                    </li>
                                                )) : null}
                                            </ul>
                                        </nav>
                                        <div className="right-side">
                                            <div className="cta-btn">
                                                <Link to="/partner-program" className="btn-first btn-submit btn-submit-red-dark">
                                                    Partner Program
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hamburger-menu">
                                        <div className={classNames("menu-btn", { "active": this.state.navmethod })} onClick={this.toggleNav}> <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Navigation */}
            </header>
        );
    }
}

export default Header;