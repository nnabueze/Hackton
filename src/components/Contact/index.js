import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header />
                <div id="page-title" className="padding-tb-30px gradient-white">
                    <div className="container text-center">
                        <ol className="breadcrumb opacity-5">
                            <li><a href="#">Home</a></li>
                            <li className="active">Contact Us</li>
                        </ol>
                        <h1 className="font-weight-300">Contact Us</h1>
                    </div>
                </div>
                <div className="container margin-top-50px margin-bottom-100px">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="map-distributors-in">
                                <div id="map-distributors">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <p className="text-grey-2">Mauris fermentum porta sem, non hendrerit enim bibendum consectetur. Fusce diam est, porttitor vehicula gravida at, accumsan bibendum tincidunt imperdiet. Maecenas quis magna faucibus, varius ante sit amet, varius augue. </p>
                                </div>
                                <div className="col-lg-6 col-md-6 margin-bottom-45px">
                                    <div className="background-white text-center padding-30px box-shadow border-radius-10">
                                        <i className="icon_mail_alt icon-large text-grey-2" />
                                        <h6 className="font-weight-300 margin-top-15px">Email</h6>
                                        <h5 className="font-2 ">info@site-name.com</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 margin-bottom-45px">
                                    <div className="background-white text-center padding-30px box-shadow border-radius-10">
                                        <i className="icon_map_alt icon-large text-grey-2" />
                                        <h6 className="font-weight-300 margin-top-15px">Address</h6>
                                        <h5 className="font-2 ">Marmora Road, Glasgow</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 sm-mb-30px">
                                    <div className="background-white text-center padding-30px box-shadow border-radius-10">
                                        <i className="icon_link icon-large text-grey-2" />
                                        <h6 className="font-weight-300 margin-top-15px">Website</h6>
                                        <h5 className="font-2">www.site-name.com</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="background-white text-center padding-30px box-shadow border-radius-10">
                                        <i className="icon_phone icon-large text-grey-2" />
                                        <h6 className="font-weight-300 margin-top-15px">Telphone</h6>
                                        <h5 className="font-2">+222 123 3019</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            <Footer />
            </div>
        );
    }
}

export default Contact;