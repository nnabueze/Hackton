import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import {Link} from 'react-router-dom';

class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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
                  <div className="full-width row margin-tb-45px" style={{marginLeft: 0}}>
                    {/* Review item */}
                    <div className="col-lg-12 margin-bottom-45px">
                      <div className="padding-30px background-white full-width background-white thum-hover box-shadow hvr-float">
                        <div className="padding-30px">
                          {/* <img src="assets/img/testimonial-1.png" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt=""> */}
                          <div id="lor" className="margin-left-85px">
                            
                            <Link to="/tenent-right" className="btn btn-sm border-radius-30 margin-tb-15px text-white background-second-color  box-shadow float-right padding-lr-20px margin-left-30px" >
                            <i className="fas fa-plus-circle" />  Tenant's Rights
                            </Link>
                            <a className="d-inline-block text-dark text-medium margin-right-20px" href="#">RIGHTS OF THE LANDLORD </a>
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
                            {/* <p class="margin-top-15px text-grey-2">The Lagos State Tanancy Act of 2011 state that: </p> */}
                            <ol>
                              <li>Right to Issuance of Receipt of Payment
                                <p>As a tenant, it is important that you pay your rent but it is not considered proof of the existence of tenancy until payment is made. One of the reasons why it is an essential part of a tenancy is because it does the following:</p>
                                <ul>
                                  <li>It is first and foremost, a proof of payment</li>
                                  <li>Helps the court calculate the precise time frame for a valid quit notice especially in a situation where there is no agreement</li>
                                  <li>The receipt is needed for the calculation of a mesne profit (which is the rent a tenant incurs upon the expiration of a valid quit notice, which was served on him).</li>
                                  <li>Needed to counter and clear allegations of your refusal or inability to adhere to timely payment of rent</li>
                                  <li>The receipt of payment is an acknowledgement from your landlord that he/she received payment from you</li>
                                </ul>
                                <p>For the receipt of payment to be considered valid, it must contain the following:</p>
                                <ul>
                                  <li>Your name as well as the name of the landlord</li>
                                  <li>The specific amount of money that was paid as rent</li>
                                  <li>The date the payment was made</li>
                                  <li>The type of property for which the rent was paid. For instance, was it a 2-bedroom apartment, a mini-flat or a detached house?</li>
                                  <li>The period of time that the rent paid is expected to cover. For instance, was the rent paid to cover a year, 2 years or 6 months?</li>
                                  <li>The signature of the person receiving the payment must also be on the receipt.</li>
                                </ul>
                                <p>Did you know that it is actually an actionable offence for the landlord to decline the issuance of receipt of payment to you? Even in a situation where you are only making a partial payment of rent for the property, a receipt still needs to be issued to you.</p>
                                <p>In the absence of a printed receipt, a written agreement, which is endorsed by the landlord in the presence of a witness stating that he/she has received payment from you will be considered a valid receipt of payment. This is in line with tenant rights.</p>
                                <p>Regardless of how cordial your relationship is with your landlord, always insist of being issued a receipt upon payment of your rent</p>
                              </li>
                              <li>Right to Written Agreement
                                <p>Agreements can either be oral or written but experts advised that you should opt for a written agreement. A written agreement removes all elements of doubt and ambiguity around the intention of all parties involved (you and the landlord). This is backed by tenant rights.</p>
                                <p>According to the law, tenancy agreements above 3 years are mandated to be written while those lesser than 3 years can either be oral or written. Experts have however advised that even if your tenancy is for 2 weeks, you should opt for a written agreement. Details that should be included in a written agreement include:</p>
                                <ul>
                                  <li>Your name as well as the name of the landlord</li>
                                  <li>Details of the type of property that is being rented out</li>
                                  <li>The location of the property you are renting as well as the features that come with it</li>
                                  <li>The period of time for which the rent will cover</li>
                                  <li>The amount of money that is being paid as rent</li>
                                  <li>The date payment was made</li>
                                  <li>The modalities for an upward review of the rent</li>
                                  <li>The duration of ‘quit notice’ to be served by the landlord</li>
                                  <li>The person responsible for repair works within and around the property</li>
                                  <li>The person who bears the responsibility for expenses like water, electricity and sanitation bills</li>
                                  <li>A post office stamp should be affixed to make it acceptable in court as an evidence</li>
                                </ul>
                                <p>Before a written agreement can be considered valid, both parties (you and the landlord) are to execute the agreement by signing and dating it with at least one witness each</p>
                                <p>You need to be careful with your written agreement because landlords are known to duplicate a single agreement and use this for all their tenancy agreements. The downside of this is that such an agreement leaves certain intentions unexpressed.</p>
                              </li>
                            </ol>
                            <a href="#" className="d-inline-block text-grey-2 text-up-small"><i className="far fa-file-alt" /> Search Laywer</a>
                            <a href="#" className="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i className="far fa-window-close" /> What Can I Do?</a>
                            <a href="#" className="d-inline-block text-grey-2 text-up-small"><i className="far fa-file-alt" /> Provisions of the Law</a>
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

export default Right;