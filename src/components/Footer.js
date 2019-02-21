import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                                <footer className="padding-tb-100px background-main-color wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <a className="d-inline-block margin-tb-15px"><img src="assets/img/LawyerLogo.jpeg" style={{width:70, height:65}} alt /></a>
                            </div>
                            <div className="col-lg-4">
                                <p className="text-white opacity-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <div className="col-lg-6">
                                <ul className="footer-menu margin-tb-15px margin-lr-0px padding-0px list-unstyled float-lg-right">
                                    <li><a href="#" className="text-white">Featured</a></li>
                                    <li><a href="#" className="text-white">Feedback</a></li>
                                    <li><a href="#" className="text-white">Ask a Question</a></li>
                                    <li><a href="#" className="text-white">Team</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr className="border-white opacity-4 margin-tb-45px" />
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="margin-0px text-white opacity-7 sm-mb-15px">© 2018 tabib Health Directory | All Right Reserved. </p>
                            </div>
                            <div className="col-lg-6">
                                <ul className="social-icon style-2 float-lg-right">
                                    <li className="list-inline-item"><a className="facebook" href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li className="list-inline-item"><a className="youtube" href="#"><i className="fab fa-youtube" /></a></li>
                                    <li className="list-inline-item"><a className="linkedin" href="#"><i className="fab fa-linkedin" /></a></li>
                                    <li className="list-inline-item"><a className="google" href="#"><i className="fab fa-google-plus" /></a></li>
                                    <li className="list-inline-item"><a className="twitter" href="#"><i className="fab fa-twitter" /></a></li>
                                    <li className="list-inline-item"><a className="rss" href="#"><i className="fa fa-rss" aria-hidden="true" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;