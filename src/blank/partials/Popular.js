import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default function Popular() {
  return (
    <section className="main-block">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="styled-heading">
                        <h3>Địa điểm đến nổi tiếng</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="find-place-img_wrap">
                        <div className="grid">
                            <figure className="effect-ruby">
                                <img src="images/find-place1.jpg" className="img-fluid" alt="img13"/>
                                <figcaption>
                                    <h5>Sài Gòn </h5>
                                    <p>385 Listings</p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row find-img-align">
                        <div className="col-md-12">
                            <div className="find-place-img_wrap">
                                <div className="grid">
                                    <figure className="effect-ruby">
                                        <img src="images/find-place2.jpg" className="img-fluid" alt="img13"/>
                                        <figcaption>
                                            <h5>Hà Nội</h5>
                                            <p>210 Listings</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="find-place-img_wrap">
                                <div className="grid">
                                    <figure className="effect-ruby">
                                        <img src="images/find-place3.jpg" className="img-fluid" alt="img13"/>
                                        <figcaption>
                                            <h5>Đà Nẵng </h5>
                                            <p>114 Listings</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row find-img-align">
                        <div className="col-md-12">
                            <div className="find-place-img_wrap">
                                <div className="grid">
                                    <figure className="effect-ruby">
                                        <img src="images/find-place4.jpg" className="img-fluid" alt="img13"/>
                                        <figcaption>
                                            <h5>Sapa </h5>
                                            <p>577 Listings</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="find-place-img_wrap">
                                <div className="grid">
                                    <figure className="effect-ruby">
                                        <img src="images/find-place5.jpg" className="img-fluid" alt="img13"/>
                                        <figcaption>
                                            <h5>Đà Lạt </h5>
                                            <p>79 Listings</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}