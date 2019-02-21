import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
class ProLaw extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                                        <li><a href="#" />Search Result</li>
                                        <li className="active">Provisions of the Law</li>
                                    </ol>
                                    {/* <h1 class="font-weight-300">THE LAGOS TENANCY LAW 2011</h1> */}
                                    <h3><span className="font-weight-300 text-blue">Location:</span> Lagos (Nigeria)</h3>
                                    <h3><span className="font-weight-300 text-red">Related Case:</span> Landlord and Tenant</h3>
                                </div>
                            </div>
                            {/* // Page Title */}
                            <div className="full-width row margin-tb-45px" style={{ marginLeft: 0 }}>
                                {/* Review item */}
                                <div className="col-lg-12 margin-bottom-45px">
                                    <div className="padding-30px background-white full-width background-white thum-hover box-shadow hvr-float">
                                        <div className="padding-30px">
                                            {/* <img src="assets/img/testimonial-1.png" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt=""> */}
                                            <div className="margin-left-85px">
                                                <a className="d-inline-block text-dark text-medium margin-right-20px" href="#">THE LAGOS TENANCY LAW 2011 </a>
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
                                                <p className="margin-top-15px text-grey-2">The Lagos State Tanancy Act of 2011 state that: </p>
                                                <ol>
                                                    <li>The Lagos Tenancy Law 2011 does not apply to residential premises owned or operated by an educational institution for its staff and students; this would include boarding houses, hostels, university staff quarters etc.</li>
                                                    <li>The Lagos Tenancy Law 2011 does not apply to residential premises provided for emergency shelter; in a care or hospice facility; in a public or private hospital or a mental health facility: and those made available in the course of providing rehabilitative or therapeutic treatment.</li>
                                                    <li>The Lagos Tenancy Law 2011 does not apply to premises in Apapa, Ikeja GRA, Ikoyi, and Victoria Island.</li>
                                                    <li>The Lagos Tenancy Law 2011 states that if you are a sitting tenant at a property, it is illegal for a landlord or his agent to demand or receive for rent in excess of 6 months for a monthly tenant, or 1 year from a yearly tenant. It is also unlawful for the sitting tenant to offer or pay rent in excess of 1 year for a yearly tenant and 6 months for a monthly tenant. The penalty for both landlord and tenant involved in such an arrangement is a fine of N100,000 or to 3 months imprisonment.</li>
                                                    <li>The Lagos Tenancy Law 2011 provides that it is unlawful for a landlord or his agent to demand or receive from a new or prospective tenant, rent in excess of 1 year in respect of any premises; it is also unlawful for the new or prospective tenant to offer or pay rent in excess of 1 year. The penalty for both landlord and tenant involved in such an arrangement is a fine of N100,000 or to 3 months imprisonment.</li>
                                                    <li>As a tenant of a property, if you get your landlord’s consent in writing to make some improvements on the premises, and the landlord ends the tenancy. You are entitled to claim compensation/reimbursement for the improvements that you made, when you are quitting the premises.</li>
                                                    <li>Your landlord cannot under any circumstances seize any item or property of yours as a tenant or interfere with your access to your personal property.</li>
                                                    <li>If you live in a property that includes payments for a service charge, as a tenant, the landlord or his agent is to issue you with a separate receipt; and you are entitled to a written account at least every 6 months from the Landlord of how monies that you paid were disbursed.</li>
                                                    <li>Where your tenancy agreement does not stipulate your notice period, the Lagos Tenancy Law 2011 provides that the notice period to be applied is thus:</li>
                                                    <ul>
                                                        <li>1 week’s notice for a tenant at will;</li>
                                                        <li>1 month’s notice for a monthly tenant;</li>
                                                        <li>3 months notice for a quarterly tenant and a half-yearly tenant; and</li>
                                                        <li>6 months notice for a yearly tenant</li>
                                                    </ul>
                                                    <li>If your landlord, in trying to eject you as a tenant from the property, demolishes or alters the building without court approval; or threatens or molests you, or attempts to remove you by force from the property, the landlord is committing an offence and is guilty if convicted to a fine of N250,000 or a maximum of 6 months imprisonment.</li>
                                                </ol>
                                                <a href="#" className="d-inline-block text-grey-2 text-up-small"><i className="far fa-file-alt" /> Search Laywer</a>
                                                <a href="#" className="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i className="far fa-window-close" /> What Can I Do?</a>
                                                <a href="#" className="d-inline-block text-grey-2 text-up-small"><i className="far fa-file-alt" /> Rights &amp; Privilages</a>
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
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                    <a className="btn btn-primary" href="page-login.html">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        );
    }
}

export default ProLaw;