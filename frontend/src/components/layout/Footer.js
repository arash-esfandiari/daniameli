import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer widget-footer clearfix">
                {this.props.children}
                <div className="first-footer ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img1">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
                    <div className="container-xl">
                        <div className="row align-items-md-center">
                            <div className="col-lg-4 col-md-4 col-sm-12 order-md-2">
                                <div className="footer-logo text-sm-center">
                                    <img data-src="images/footer-logo.png" className="img-fluid" alt="footer-logo" src="images/footer-logo.png" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 order-md-1 res-767-mt-20">
                                <div className="text-left">
                                    {/*  featured-icon-box */}
                                    <div className="featured-icon-box left-icon icon-align-top">
                                        <div className="featured-icon">{/*  featured-icon */}
                                            <div className="ttm-icon ttm-textcolor-white ttm-icon_element-size-md">
                                                <i className="ti ti-location-pin" />{/*  ttm-icon */}
                                            </div>
                                        </div>
                                        <div className="featured-content">{/*  featured-content */}
                                            <div className="featured-desc">
                                                <p>Eupener Straße 124 ,50933 Köln, Germany</p>
                                            </div>
                                        </div>
                                    </div>{/*  featured-icon-box END */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 order-md-3 res-767-mt-20">
                                <div className="text-sm-right">
                                    <a href="mailto:info@daniameli.de" className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white"><i className="far fa-envelope" />info@daniameli.de</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}