import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <header className="background-white box-shadow">
                    <div className="container header-in">
                        <div className="row">
                            <div className="col-lg-2 col-md-12">
                                <a id="logo" href="index-2.html" className="d-inline-block margin-tb-15px"><img src="assets/img/LawyerLogo.jpeg" style={{ width: 70, height: 65 }} alt /></a>
                                <a className="mobile-toggle padding-13px background-main-color" href="#"><i className="fas fa-bars" /></a>
                            </div>
                            <div className="col-lg-7 col-md-12 position-inherit">
                                <ul id="menu-main" className="nav-menu float-lg-right link-padding-tb-20px">
                                    <li className="has-dropdown"><Link to="/" >Home</Link>
                                    </li>
                                    <li className="has-dropdown"><Link to="">About</Link>
                                    </li>
                                    <li className="has-dropdown"><Link to="">Blog</Link>

                                    </li>
                                    <li className="has-dropdown"><Link to="/contact">contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <hr className="margin-bottom-0px d-block d-sm-none" />
                                <a href="dashboard-add-listing.html" className="btn btn-sm border-radius-30 margin-tb-15px text-white background-second-color  box-shadow float-right padding-lr-20px margin-left-30px">
                                    <i className="fas fa-plus-circle" />  Enter Case
                                    </a>

                            </div>
                        </div>
                    </div>
                </header>
                {/* // Header  */}

            </div>
        );
    }
}

export default Header;