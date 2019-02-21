import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Header from "../Header";
import Footer from '../Footer';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location:'Select Location',
            case:"Select Case"
        };
        this.onClick = this.onClick.bind(this);
        this.abuja = this.abuja.bind(this);
        this.lagos = this.lagos.bind(this);
        this.kaduna = this.kaduna.bind(this);
        this.plateau = this.plateau.bind(this);
        this.kwara = this.kwara.bind(this);
        this.delta = this.delta.bind(this);
        this.gombe = this.gombe.bind(this);
        this.anambra = this.anambra.bind(this);
        this.case1 = this.case1.bind(this);
        this.case2 = this.case2.bind(this);
        this.case3 = this.case3.bind(this);
        this.case4 = this.case4.bind(this);
    }

    case1(){
        this.setState({
            case:'Landlord and Tenant'
        });   
    }
    case2(){
        this.setState({
            case:'Rape'
        });   
    }
    case3(){
        this.setState({
            case:'Sexual Harassment'
        });   
    }
    case4(){
        this.setState({
            case:'Cyber Bullying'
        });   
    }
    abuja(){
        this.setState({
            location:'ABUJA'
        });
    }

    lagos(){
        this.setState({
            location:'LAGOS'
        });
    }

    gombe(){
        this.setState({
            location:'GOMBE'
        });
    }
    kaduna(){
        this.setState({
            location:'KADUNA'
        });
    }
    plateau(){
        this.setState({
            location:'PLATEAU'
        });
    }
    anambra(){
        this.setState({
            location:'ANAMBRA'
        });
    }
    kwara(){
        this.setState({
            location:'KWARA'
        }); 
    }
    delta(){
        this.setState({
            location:'DELTA'
        }); 
    }
    onClick(e){
        e.preventDefault();
        this.props.history.push('/search-result');
    }
    render() {
        return (
            <div>
                <Header />
                <div className="banner padding-tb-150px sm-ptb-80px background-overlay" style={{ backgroundImage: 'url("assets/img/back4.jpg")' }}>
                    <div className="container z-index-2 position-relative">
                        <div className="row margin-tb-60px">
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6 margin-bottom-30px wow fadeInUp">
                                        <a href="#" className="d-block border-radius-15 hvr-float hvr-sh2">
                                            <div className="background-main-color text-white border-radius-15 padding-30px text-center opacity-hover-7">
                                                <div className="icon margin-bottom-15px opacity-7">
                                                    <img src="assets/img/icon/court.png" style={{width:50,height:50}} alt />
                                                </div>
                                                Court's
                                                </div>
                                        </a>
                                    </div>
                                    <div className="col-6 margin-bottom-30px wow fadeInUp" data-wow-delay="0.2s">
                                        <a href="#" className="d-block border-radius-15 hvr-float hvr-sh2">
                                            <div className="background-main-color text-white border-radius-15 padding-30px text-center opacity-hover-7">
                                                <div className="icon margin-bottom-15px opacity-7">
                                                    <img src="assets/img/icon/artboard.png" alt />
                                                </div>
                                                ADR'S
                          </div>
                                        </a>
                                    </div>
                                    <div className="col-6 wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="#" className="d-block border-radius-15 hvr-float hvr-sh2">
                                            <div className="background-main-color text-white border-radius-15 padding-30px text-center opacity-hover-7">
                                                <div className="icon margin-bottom-15px">
                                                    <img src="assets/img/icon/join-us.png" style={{width:50,height:50}} alt />
                                                </div>
                                                Multidoor Court
                          </div>
                                        </a>
                                    </div>
                                    <div className="col-6 wow fadeInUp" data-wow-delay="0.6s">
                                        <a href="#" className="d-block border-radius-15 hvr-float hvr-sh2">
                                            <div className="background-main-color text-white border-radius-15 padding-30px text-center opacity-hover-7">
                                                <div className="icon margin-bottom-15px opacity-7">
                                                    <img src="assets/img/icon/map.png" style={{width:50,height:50}} alt />
                                                </div>
                                                Mins. of Justice
                          </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="listing-search margin-top-240px sm-mt-45px">
                                    <form className="row no-gutters">
                                    <div className="col-md-4">
                                            <div className="categories dropdown">
                                                <a className="listing-form d-block text-nowrap" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.location}</a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.abuja}>ABUJA FCT</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.lagos}>LAGOS</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.kaduna}>KADUNA</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.plateau}>PLATEAU</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.kwara}>KWARA</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.delta}>DELTA</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.gombe}>GOMBE</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.anambra}>ANAMBRA</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="categories dropdown">
                                                <a className="listing-form d-block text-nowrap" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.case}</a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.case1}>Landlord and Tenant </button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.case2}>Rape</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.case3}>Sexual Harassment</button>
                                                    <button className="dropdown-item text-up-small" type="button" onClick={this.case4}>Cyber Bullying</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <a className="listing-bottom background-second-color box-shadow" href="#" onClick={this.onClick}>Search Now</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="padding-tb-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 sm-mb-30px wow fadeInUp">
                                <div className="service text-center opacity-hover-7 hvr-bob">
                                    <div className="icon margin-bottom-10px">
                                        <img src="assets/img/icon/service-1.png" alt />
                                       
                                    </div>
                                    <h3 className="text-second-color">Min. of Justics</h3>
                                    <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 sm-mb-30px wow fadeInUp" data-wow-delay="0.2s">
                                <div className="service text-center opacity-hover-7 hvr-bob">
                                    <div className="icon margin-bottom-10px">
                                        <img src="assets/img/icon/service-2.png" alt />
                                    </div>
                                    <h3 className="text-second-color"> Court's</h3>
                                    <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 sm-mb-30px wow fadeInUp" data-wow-delay="0.4s">
                                <div className="service text-center opacity-hover-7 hvr-bob">
                                    <div className="icon margin-bottom-10px">
                                        <img src="assets/img/icon/service-3.png" alt />
                                    </div>
                                    <h3 className="text-second-color">ADR's</h3>
                                    <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 sm-mb-30px wow fadeInUp" data-wow-delay="0.6s">
                                <div className="service text-center opacity-hover-7 hvr-bob">
                                    <div className="icon margin-bottom-10px">
                                        <img src="assets/img/icon/service-4.png" alt />
                                    </div>
                                    <h3 className="text-second-color">Multidoor Court's</h3>
                                    <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="padding-tb-100px background-grey-1">
                    <div className="container">
                        {/* Title */}
                        <div className="row justify-content-center margin-bottom-45px">
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-md-4 wow fadeInUp">
                                        <h1 className="text-second-color font-weight-300 text-sm-center text-lg-right margin-tb-15px">Famous Lawyer's</h1>
                                    </div>
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                        <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                    <div className="col-md-2 wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="#" className="text-main-color margin-tb-15px d-inline-block"><span className="d-block float-left margin-right-10px margin-top-5px">Show All</span> <i className="far fa-arrow-alt-circle-right text-large margin-top-7px" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // Title */}
                        <div className="row">
                            {/* Doctor */}
                            <div className="col-lg-3 col-md-6 hvr-bob sm-mb-45px">
                                <div className="background-white box-shadow wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="item-thumbnail thum gradient">
                                        <a href="#"><img src="assets/img/image1.jpg" alt /></a>
                                    </div>
                                    <div className="padding-lr-30px padding-bottom-30px">
                                        <div className="pull-top-40px z-index-2 position-relative">
                                            <span className="text-grey-2">Internal</span>
                                            <h5 className="margin-tb-15px"><a className="text-dark" href="#">Barr. Shahrzat Moh</a></h5>
                                            <div className="rating clearfix">
                                                <ul className="float-left">
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li />
                                                </ul>
                                                <small className="float-right text-grey-2">(17 reviews)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // Doctor */}
                            {/* Doctor */}
                            <div className="col-lg-3 col-md-6 hvr-bob sm-mb-45px">
                                <div className="background-white box-shadow wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="item-thumbnail thum gradient">
                                        <a href="#"><img src="assets/img/image2.jpg" alt /></a>
                                    </div>
                                    <div className="padding-lr-30px padding-bottom-30px">
                                        <div className="pull-top-40px z-index-2 position-relative">
                                            <span className="text-grey-2">Internal</span>
                                            <h5 className="margin-tb-15px"><a className="text-dark" href="#">Barr. Salma Elkheir</a></h5>
                                            <div className="rating clearfix">
                                                <ul className="float-left">
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li />
                                                </ul>
                                                <small className="float-right text-grey-2">(17 reviews)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // Doctor */}
                            {/* Doctor */}
                            <div className="col-lg-3 col-md-6 hvr-bob sm-mb-45px">
                                <div className="background-white box-shadow wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="item-thumbnail thum gradient">
                                        <a href="#"><img src="assets/img/image3.jpg" alt /></a>
                                    </div>
                                    <div className="padding-lr-30px padding-bottom-30px">
                                        <div className="pull-top-40px z-index-2 position-relative">
                                            <span className="text-grey-2">Internal</span>
                                            <h5 className="margin-tb-15px"><a className="text-dark" href="#">Barr. Adwa Ali</a></h5>
                                            <div className="rating clearfix">
                                                <ul className="float-left">
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li />
                                                </ul>
                                                <small className="float-right text-grey-2">(17 reviews)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // Doctor */}
                            {/* Doctor */}
                            <div className="col-lg-3 col-md-6 hvr-bob sm-mb-45px">
                                <div className="background-white box-shadow wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="item-thumbnail thum gradient">
                                        <a href="#"><img src="assets/img/image4.jpg" alt /></a>
                                    </div>
                                    <div className="padding-lr-30px padding-bottom-30px">
                                        <div className="pull-top-40px z-index-2 position-relative">
                                            <span className="text-grey-2">Internal</span>
                                            <h5 className="margin-tb-15px"><a className="text-dark" href="#">Barr. Salim Qasim</a></h5>
                                            <div className="rating clearfix">
                                                <ul className="float-left">
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li className="active" />
                                                    <li />
                                                </ul>
                                                <small className="float-right text-grey-2">(17 reviews)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // Doctor */}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default withRouter(Home);