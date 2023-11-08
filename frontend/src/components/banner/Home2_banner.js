import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
    "mdbreact";

import { Link } from 'react-router-dom'

export class CarouselPage2 extends Component {
    render() {
        return (
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCarousel
                        activeItem={1}
                        length={2}
                        showControls={true}
                        showIndicators={false}
                        id="Home_banner2"
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img className="d-block w-100" src="images/plain-bg.jpeg" alt="First slide" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <div className="container-xl d-flex">
                                        <div className="carousel-caption-inner">
                                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                                                <h5 className="ttm-textcolor-skincolor">Delight your Customers&nbsp;&nbsp;&nbsp;</h5>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                                                <h2 className="ttm-textcolor-darkgrey">Industry Leading Furnaces and Machinery. <strong className="ttm-textcolor-skincolor">25 Years of Experience</strong></h2>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                                                <p className="text">Sales and Installation of Induction Furnaces. With more than 25 years of technical and field experience. </p>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="3.5s" >
                                                <p>
                                                    <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white mr-3"><Link to='/about'>view more details</Link></button>
                                                    <button className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey"><Link to='/contacts'>contact us</Link></button>
                                                </p>
                                            </MDBAnimation>
                                        </div>
                                        <div className="d-inline-block effect position-relative">
                                            <img className="img-fluid rounded" src="images/furnace1bordered.png" alt="First slide" />
                                            <span></span>
                                            <span></span>
                                            <span>
                                                <i className="far fa-paper-plane" />
                                                100% Guaranteed Satisfaction
                                            </span>
                                            <span></span>
                                        </div>
                                    </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img className="d-block w-100" src="images/plain-bg.jpeg" alt="Second slide" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <div className="container-xl d-flex">
                                        <div className="carousel-caption-inner">
                                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                                                <h5 className="ttm-textcolor-skincolor">Trust and Client Focus&nbsp;&nbsp;&nbsp;</h5>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="5.5s" >
                                                <h2 className="ttm-textcolor-darkgrey">Top quality<strong className="ttm-textcolor-skincolor">Industrial Equipment</strong> And spare parts</h2>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="6s" >
                                                <p className="text">Daniameli offers only the best equipment and machinery; we strive for excellence</p>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="6.5s" >
                                                <p>
                                                    <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white mr-3"><Link to='/about'>read more </Link></button>
                                                    <button className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey"><Link to='/contacts'>contact us</Link></button>
                                                </p>
                                            </MDBAnimation>
                                        </div>
                                        <div className="d-inline-block effect position-relative">
                                            <img className="img-fluid" src="images/rolling.png" alt="First slide" />
                                        </div>
                                    </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default CarouselPage2;