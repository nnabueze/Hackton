import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link, withRouter} from 'react-router-dom';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container margin-bottom-100px content-wrapper">
                    <div className="container-fluid overflow-hidden">
                        <div className="row margin-tb-90px margin-lr-10px sm-mrl-0px">
                            {/* Page Title */}
                            <div id="page-title" className="padding-30px background-white full-width">
                                <div className="container">
                                    <ol className="breadcrumb opacity-5">
                                        <li><a href="#">Home</a></li>
                                        <li className="active">Search Result</li>
                                    </ol>
                                    <h1 className="font-weight-300">Now Youre Here!</h1>
                                </div>
                            </div>
                            {/* // Page Title */}
                            <div className="row margin-tb-45px">
                                {/* Review item */}
                                <div className="col-lg-6 margin-bottom-45px">
                                    <div className="background-white thum-hover box-shadow hvr-float">
                                        <div className="padding-30px">
                                            <img src="assets/img/law1.jfif" style={{width:85, height:80}}  class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
                                            <div className="margin-left-85px">
                                                <Link to="/pro-law" className="d-inline-block text-dark text-medium margin-right-20px" >Provisions of the Law </Link>

                                                <p className="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                                <Link to="/pro-law" className="d-inline-block text-grey-2 text-up-small" ><i className="far fa-file-alt" /> Read More</Link>
                                                {/* <a href="#" class="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i class="far fa-window-close"></i> Delete</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // Review item */}
                                {/* Review item */}
                                <div className="col-lg-6 margin-bottom-45px">
                                    <div className="background-white thum-hover box-shadow hvr-float">
                                        <div className="padding-30px">
                                            <img src="assets/img/rights1.jfif" style={{width:85, height:80}} class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
                                            <div className="margin-left-85px">
                                                <a className="d-inline-block text-dark text-medium margin-right-20px" href="#">Youre Rights &amp; Privilages </a>

                                                <p className="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                                <Link to="/right-and-privilage" className="d-inline-block text-grey-2 text-up-small"><i className="far fa-file-alt" /> Read More</Link>
                                                {/* <a href="#" class="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i class="far fa-window-close"></i> Delete</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // Review item */}
                                {/* Review item */}
                                <div className="col-lg-6 margin-bottom-45px">
                                    <div className="background-white thum-hover box-shadow hvr-float">
                                        <div className="padding-30px">
                                            <img src="assets/img/testimonial-3.png" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
                                            <div className="margin-left-85px">
                                                <a className="d-inline-block text-dark text-medium margin-right-20px" href="#">Lawyer's Profiles </a>

                                                <p className="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                                <Link to="/lawyer-profile" className="d-inline-block text-grey-2 text-up-small"><i className="far fa-file-alt" /><i className="far fa-file-alt" /> View</Link>
                                                {/* <a href="#" class="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i class="far fa-window-close"></i> Delete</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // Review item */}
                                {/* Review item */}
                                <div className="col-lg-6 margin-bottom-45px">
                                    <div className="background-white thum-hover box-shadow hvr-float">
                                        <div className="padding-30px">
                                            <img src="assets/img/question.jfif" className="float-left margin-right-20px border-radius-60 margin-bottom-20px" style={{width:85, height:80}} alt />
                                            <div className="margin-left-85px">
                                                <a className="d-inline-block text-dark text-medium margin-right-20px" href="#">What You Can DO Now </a>
                                                {/* <span class="text-extra-small">Date :  <a href="#" class="text-main-color">July 15, 2016</a></span> */}
                                                {/* <div class="rating">
                                            <ul>
                                                <li class="active"></li>
                                                <li class="active"></li>
                                                <li class="active"></li>
                                                <li class="active"></li>
                                                <li></li>
                                            </ul>
                                        </div> */}
                                                <p className="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                                <Link to="/You-Can-Do-Now" className="d-inline-block text-grey-2 text-up-small"><i className="far fa-file-alt" /><i className="far fa-file-alt" /> Proceed</Link>
                                                {/* <a href="#" class="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i class="far fa-window-close"></i> Delete</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // Review item */}
                            </div>
                            {/* pagination */}
                            {/* <ul class="pagination pagination-md">
                        <li class="page-item disabled"><a class="page-link rounded-0" href="#" tabindex="-1">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link rounded-0" href="#">Next</a></li>
                    </ul> */}
                            {/* //pagination */}
                        </div>
                    </div>
                    {/* /.container-fluid*/}
                    {/* /.content-wrapper*/}
                    {/* <footer class="sticky-footer">
                <div class="container">
                    <div class="text-center">
                        <span>© 2018 tabib Health Directory | All Right Reserved <a class="text-grey-2 margin-left-15px" href="https://themeforest.net/user/nile-theme/portfolio" target="_blank">Powered by : Nile Theme</a></span>
                    </div>
                </div>
            </footer> */}
                    {/* Scroll to Top Button*/}
                    <a className="scroll-to-top rounded" href="#page-top">
                        <i className="fa fa-angle-up" />
                    </a>
                    {/* Logout Modal*/}

                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Result) ;